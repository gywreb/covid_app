import axios from "axios";

const url = "https://corona.lmao.ninja";
const alt_url = "https://disease.sh";

const who_rss =
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.who.int/rss-feeds/news-english.xml";

const news_api =
  "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=covid&language=en&sortBy=publishedAt&pageSize=16&apiKey=c358aa0d14c04e3b9ef7088ec835a595";

const covid_youtube =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=covid-19&relevanceLanguage=en&key=AIzaSyBMgrkV0E-n0wRJu8DGLzkGqldNDOla0jE";

// const vn_youtube =
//   "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=covid&relevanceLanguage=vi&key=AIzaSyDqqoBeoS6DmwjcakP5r_AvX3weRQ2ehnY";

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
      changeableUrl = `${url}/v2/historical/${country}`;
    } else changeableUrl = `${url}/v2/historical/All`;

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
