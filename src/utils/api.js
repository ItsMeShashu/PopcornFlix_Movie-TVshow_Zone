import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = process.env.REACT_APP_API_KEY;

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
      withCredentials: false,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
