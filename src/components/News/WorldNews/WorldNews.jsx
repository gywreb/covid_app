import React, { useState, useEffect } from "react";
import styles from "./WorldNews.module.scss";
import { fetchNews } from "../../../api";
import cx from "classnames";
import { CovidUpdate } from "../../../images";
import Expand from "react-expand-animated";

const WorldNews = () => {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNews = await fetchNews();
      setNews(fetchedNews);
    };
    fetchData();
  }, [setNews]);

  const handleToggle = (open) => {
    let readmore_btn = document.getElementById("news_loadmore");
    if (!open) {
      readmore_btn.innerHTML = "COLLAPSE";
      setOpen(true);
    } else {
      readmore_btn.innerHTML = "LOAD MORE";
      setOpen(false);
    }
  };

  if (!news[0]) return "Loading...";
  else {
    console.log(news);
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className={styles.title}>Latest News</h2>
        </div>
        {news.length
          ? news
              .slice(0, 4)
              .map(
                (
                  {
                    title,
                    description,
                    url,
                    image,
                    source: { name },
                    publishedAt,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className={cx("col-xs-12 col-xl-3", styles.news_card)}
                  >
                    <div className={cx(styles.news_box, "row")}>
                      <div className={styles.img_container}>
                        <a href={url} rel="noopener noreferrer" target="_blank">
                          <img src={image ? image : CovidUpdate} alt="" />
                        </a>
                      </div>
                      <div className={cx("col-xs-12", styles.news_title)}>
                        <h3>
                          <a
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {title}
                          </a>
                        </h3>
                      </div>
                      <div className={cx("col-xs-12", styles.news_content)}>
                        <p>{description}</p>
                      </div>
                      <div
                        className={cx(
                          "col-xs-12 flex a-center jc-spacebtw",
                          styles.source_date
                        )}
                      >
                        <p className={styles.news_source}>{name}</p>
                        <p className={styles.news_date}>
                          {new Date(publishedAt).toLocaleDateString() +
                            " - " +
                            new Date(publishedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )
          : "Loading..."}
        <Expand className={cx("row", styles.news_expand)} open={open}>
          {news.length
            ? news
                .slice(4)
                .map(
                  (
                    {
                      title,
                      description,
                      url,
                      image,
                      source: { name },
                      publishedAt,
                    },
                    index
                  ) => (
                    <div
                      key={index}
                      className={cx("col-xs-12 col-xl-3", styles.news_card)}
                    >
                      <div className={cx(styles.news_box, "row")}>
                        <div className={styles.img_container}>
                          <a href={url} target="_blank">
                            <img src={image ? image : CovidUpdate} alt="" />
                          </a>
                        </div>
                        <div className={cx("col-xs-12", styles.news_title)}>
                          <h3>
                            <a href={url} target="_blank">
                              {title}
                            </a>
                          </h3>
                        </div>
                        <div className={cx("col-xs-12", styles.news_content)}>
                          <p>{description}</p>
                        </div>
                        <div
                          className={cx(
                            "col-xs-12 flex a-center jc-spacebtw",
                            styles.source_date
                          )}
                        >
                          <p className={styles.news_source}>{name}</p>
                          <p className={styles.news_date}>
                            {new Date(publishedAt).toLocaleDateString() +
                              " - " +
                              new Date(publishedAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )
            : "Loading..."}
        </Expand>
        <div className={cx("row", styles.news_full)}>
          {news.length
            ? news
                .slice(4)
                .map(
                  (
                    {
                      title,
                      description,
                      url,
                      image,
                      source: { name },
                      publishedAt,
                    },
                    index
                  ) => (
                    <div
                      key={index}
                      className={cx("col-xs-12 col-xl-3", styles.news_card)}
                    >
                      <div className={cx(styles.news_box, "row")}>
                        <div className={styles.img_container}>
                          <a href={url} target="_blank">
                            <img src={image ? image : CovidUpdate} alt="" />
                          </a>
                        </div>
                        <div className={cx("col-xs-12", styles.news_title)}>
                          <h3>
                            <a href={url} target="_blank">
                              {title}
                            </a>
                          </h3>
                        </div>
                        <div className={cx("col-xs-12", styles.news_content)}>
                          <p>{description}</p>
                        </div>
                        <div
                          className={cx(
                            "col-xs-12 flex a-center jc-spacebtw",
                            styles.source_date
                          )}
                        >
                          <p className={styles.news_source}>{name}</p>
                          <p className={styles.news_date}>
                            {new Date(publishedAt).toLocaleDateString() +
                              " - " +
                              new Date(publishedAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )
            : "Loading..."}
        </div>
        <div className="col-xs-12 flex a-center jc-center">
          <button
            id="news_loadmore"
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

export default WorldNews;
