import React, { useState, useEffect } from "react";
import { fetchYoutube } from "../../../api";
import cx from "classnames";
import styles from "./VNYoutube.module.scss";
import { YoutubeError } from "../../../images";

const VNYoutube = () => {
  const [videos, setVideos] = useState([]);
  const [play, setPlay] = useState({});

  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlist = await fetchYoutube();
      setVideos(playlist);
      if (playlist) {
        const {
          id: { videoId },
        } = playlist[0];
        setPlay(videoId);
      }
    };
    fetchPlaylist();
  }, [setVideos]);

  console.log(videos);
  console.log(play);

  const handleChangeVideo = (val) => {
    setPlay(val);
  };
  if (!videos)
    return (
      <div className="col-xs-12 flex a-center jc-center">
        <div className="row">
          <div className="col-xs-12 flex a-center jc-center">
            <h3> Oops ! There something wrong with Youtube</h3>
          </div>
          <div className="col-xs-12 flex a-center jc-center">
            <img src={YoutubeError} alt="" />
          </div>
          <div className="col-xs-12 flex a-center jc-center">
            <h3> Please come back later !</h3>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-12 col-xl-6">
            <div className={styles.video_container}>
              <iframe
                width="650"
                height="508"
                src={`https://www.youtube.com/embed/${play}`}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "4px" }}
              ></iframe>
            </div>
          </div>
          <div className="col-xs-12 col-xl-6">
            <div className="row">
              {videos
                ? videos.map(
                    (
                      { id: { videoId }, snippet: { title, publishedAt } },
                      index
                    ) => (
                      <div
                        key={index}
                        className={cx("col-xs-12 col-xl-6", styles.thumbnail)}
                      >
                        <button
                          value={videoId}
                          className={styles.thumbnail_btn}
                          onClick={(e) => handleChangeVideo(e.target.value)}
                        >
                          <img
                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                            alt=""
                          />
                          <div className={styles.video_content}>
                            <h3 className={styles.title}>{title}</h3>
                            <h4 className={styles.date}>
                              {`Upload : ${new Date(
                                new Date() - new Date(publishedAt)
                              ).getHours()} hours ago`}
                            </h4>
                          </div>
                        </button>
                      </div>
                    )
                  )
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VNYoutube;
