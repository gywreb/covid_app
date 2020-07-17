import axios from "axios";
import qs from "qs";

const url = "https://corona.lmao.ninja";
// const alt_url = "https://disease.sh";

const who_rss =
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.who.int/rss-feeds/news-english.xml";

// const news_api =
//   "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=covid&language=en&sortBy=publishedAt&pageSize=16&apiKey=c358aa0d14c04e3b9ef7088ec835a595";

const covid_youtube =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=covid-19&relevanceLanguage=en&key=AIzaSyBMgrkV0E-n0wRJu8DGLzkGqldNDOla0jE";

const covid_news =
  "https://gnews.io/api/v3/search?q=covid&max=8&token=e399daeca62821837c1e0edcbee78757";

export const fetchSummary = async () => {
  try {
    const { data } = await axios.get(`${url}/v2/all?yesterday`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/v2/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async (country) => {
  try {
    let changeableUrl = "";

    if (country) {
      changeableUrl = `${url}/v2/historical/${country}?lastdays=all`;
    } else changeableUrl = `${url}/v2/historical/all?lastdays=all`;

    const { data } = await axios.get(changeableUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryPicker = async () => {
  try {
    const { data } = await axios.get(`${url}/v2/historical`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fecthWHONews = async () => {
  try {
    const {
      data: { items },
    } = await axios.get(who_rss);

    return items;
  } catch (error) {
    console.log(error);
  }
};

export const fetchYoutube = async () => {
  try {
    const {
      data: { items },
    } = await axios.get(covid_youtube);

    return items;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNews = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(covid_news);
    return articles;
  } catch (error) {
    console.log(error);
  }
};

export const fetchChatResponse = async (ask) => {
  try {
    const askData = qs.stringify({
      question: `${ask}`,
    });
    const { data } = await axios({
      method: "post",
      url: "http://longnh.anttizen.com/api/faq",
      data: askData,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
