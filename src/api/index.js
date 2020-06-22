import axios from "axios";

const url = "https://corona.lmao.ninja";

const who_rss =
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.who.int/rss-feeds/news-english.xml";

const who_youtube =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=4&playlistId=UU07-dOwgza1IguKA86jqxNA&key=AIzaSyDqqoBeoS6DmwjcakP5r_AvX3weRQ2ehnY";

const covid_youtube =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=covid-19&relevanceLanguage=en&key=AIzaSyDqqoBeoS6DmwjcakP5r_AvX3weRQ2ehnY";

const vn_youtube =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=covid&relevanceLanguage=vi&key=AIzaSyDqqoBeoS6DmwjcakP5r_AvX3weRQ2ehnY";
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
    } else changeableUrl = `${url}/v2/historical/all`;

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
    } = await axios.get(vn_youtube);

    return items;
  } catch (error) {
    console.log(error);
  }
};
