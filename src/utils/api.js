import axios from "axios";

const BASE_URL = "http://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2JlY2FmOGM3MjU0OGY3ZGFkNDA0N2UzNDA3Y2M2MiIsInN1YiI6IjY0YWI4OThlM2UyZWM4MDEyZWU0MjY2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YBQkJUF-_mY93eqNtQoihdrXshVOROTJ4u-0lsuCsRQ";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
