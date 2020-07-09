import React, { useState, useEffect, createContext } from "react";
import { fecthWHONews } from "../../../api";
import styles from "./WHONews.module.scss";
import { CovidNews } from "../../../images";
import cx from "classnames";

const WHONews = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      const items = await fecthWHONews();
      const covidNews = [
        ...items.filter((item) => item.content.includes("COVID-19")),
      ];
      covidNews.length ? setNews(covidNews[0]) : setNews(items[0]);
    };
    fetchNews();
  }, [setNews]);

  if (!news) return "Loading...";
  else {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className={styles.title}>WHO Latest News</h2>
        </div>
        <div className={cx("col-xs-12 flex a-center jc-center", styles.banner)}>
          <img src={CovidNews} alt="" />
        </div>
        <div className="col-xs-12">
          <div className={styles.news_box}>
            <h5 className={styles.pubdate}>Public Date : {news.pubDate}</h5>
            <h4 className={styles.news_title}>{news.title}</h4>
            <div
              className={styles.news_content_box}
              dangerouslySetInnerHTML={{ __html: news.description }}
            ></div>
            <a href={news.link} target="_blank">
              Read more
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default WHONews;
