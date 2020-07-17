import React, { useState, useEffect } from "react";
import { fetchYoutube } from "../../../api";
import cx from "classnames";
import styles from "./WorldYoutube.module.scss";
import { YoutubeError } from "../../../images";
import Modal from "react-modal";
import Expand from "react-expand-animated";

const WorldYoutube = () => {
  const [videos, setVideos] = useState([]);
  const [play, setPlay] = useState({});
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body");
    const fetchPlaylist = async () => {
      const playlist = await fetchYoutube();
      if (playlist) {
        const playlistByDate = playlist.sort((a, b) =>
          new Date(a.snippet.publishedAt) > new Date(b.snippet.publishedAt)
            ? -1
            : new Date(b.snippet.publishedAt) > new Date(a.snippet.publishedAt)
            ? 1
            : 0
        );
        setVideos(playlistByDate);
      } else setVideos(undefined);
    };
    fetchPlaylist();
  }, [setVideos]);

  console.log(videos);
  console.log(play);

  const handleChangeVideo = (val) => {
    setPlay(val);
    setShow(true);
    setClose(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setShow(false);
    setClose(false);
    document.body.style.overflow = "unset";
  };

  const handleCloseButton = () => {
    setShow(false);
    setClose(false);
    document.body.style.overflow = "unset";
  };

  const handleToggle = (open) => {
    let readmore_btn = document.getElementById("youtube_loadmore");
    if (!open) {
      readmore_btn.innerHTML = "COLLAPSE";
      setOpen(true);
    } else {
      readmore_btn.innerHTML = "LOAD MORE";
      setOpen(false);
    }
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
    console.log(videos);
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className={styles.title}>Newest Youtube</h2>
        </div>
        <button
          className={
            close ? cx(styles.close_modal, styles.active) : styles.close_modal
          }
          onClick={handleCloseButton}
        >
          x
        </button>
        <Modal
          isOpen={show}
          onRequestClose={handleClose}
          overlayClassName={styles.modal_overlay}
          className={styles.modal_content}
          closeTimeoutMS={200}
        >
          <div className={styles.video_container}>
            <iframe
              title="covid_news"
              src={`https://www.youtube.com/embed/${play}?autoplay=1`}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "4px" }}
            ></iframe>
          </div>
        </Modal>
        <div className="col-xs-12">
          <div className="row">
            {videos
              ? videos
                  .slice(0, 4)
                  .map(
                    (
                      { id: { videoId }, snippet: { title, publishedAt } },
                      index
                    ) => (
                      <div
                        key={index}
                        className={cx("col-xs-12 col-xl-3", styles.thumbnail)}
                      >
                        <button
                          href="#videoframe"
                          value={videoId}
                          className={styles.thumbnail_btn}
                          onClick={(e) => handleChangeVideo(e.target.value)}
                        >
                          <img
                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                            alt=""
                          />
                          <div className={styles.video_content}>
                            <div className={styles.title}>
                              <h3>{title}</h3>
                            </div>
                            <h4 className={styles.date}>
                              {`Upload : ${new Date(
                                publishedAt
                              ).toLocaleDateString()} - ${new Date(
                                publishedAt
                              ).toLocaleTimeString()}`}
                            </h4>
                          </div>
                        </button>
                      </div>
                    )
                  )
              : "Loading..."}
          </div>
          <Expand open={open}>
            <div className={cx("row", styles.youtube_expand)}>
              {videos
                ? videos
                    .slice(4)
                    .map(
                      (
                        { id: { videoId }, snippet: { title, publishedAt } },
                        index
                      ) => (
                        <div
                          key={index}
                          className={cx("col-xs-12 col-xl-3", styles.thumbnail)}
                        >
                          <button
                            href="#videoframe"
                            value={videoId}
                            className={styles.thumbnail_btn}
                            onClick={(e) => handleChangeVideo(e.target.value)}
                          >
                            <img
                              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                              alt=""
                            />
                            <div className={styles.video_content}>
                              <div className={styles.title}>
                                <h3>{title}</h3>
                              </div>
                              <h4 className={styles.date}>
                                {`Upload : ${new Date(
                                  publishedAt
                                ).toLocaleDateString()} - ${new Date(
                                  publishedAt
                                ).toLocaleTimeString()}`}
                              </h4>
                            </div>
                          </button>
                        </div>
                      )
                    )
                : "Loading..."}
            </div>
          </Expand>
          <div className={cx("row", styles.youtube_full)}>
            {videos
              ? videos
                  .slice(4)
                  .map(
                    (
                      { id: { videoId }, snippet: { title, publishedAt } },
                      index
                    ) => (
                      <div
                        key={index}
                        className={cx("col-xs-12 col-xl-3", styles.thumbnail)}
                      >
                        <button
                          href="#videoframe"
                          value={videoId}
                          className={styles.thumbnail_btn}
                          onClick={(e) => handleChangeVideo(e.target.value)}
                        >
                          <img
                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                            alt=""
                          />
                          <div className={styles.video_content}>
                            <div className={styles.title}>
                              <h3>{title}</h3>
                            </div>
                            <h4 className={styles.date}>
                              {`Upload : ${new Date(
                                publishedAt
                              ).toLocaleDateString()} - ${new Date(
                                publishedAt
                              ).toLocaleTimeString()}`}
                            </h4>
                          </div>
                        </button>
                      </div>
                    )
                  )
              : "Loading..."}
          </div>
        </div>
        <div className="col-xs-12 flex a-center jc-center">
          <button
            id="youtube_loadmore"
            className={styles.expand_btn}
            onClick={() => handleToggle(open)}
          >
            LOAD MORE
          </button>
        </div>
      </React.Fragment>
    );
  }
};

export default WorldYoutube;
