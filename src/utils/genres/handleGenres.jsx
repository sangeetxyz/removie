import axios from "axios";
import { BASE_URL, TMDB_TOKEN } from "../links/links";
const getGenreApi = async (type, params) => {
  const result = await axios.get(BASE_URL + `/genre/${type}/list`, {
    headers: {
      Authorization: "Bearer " + TMDB_TOKEN,
    },
    params,
  });
  return result.data;
};
export const settleGenres = async () => {
  const endPoints = ["movie", "tv"];
  let promises = [];
  let allGenres = [];

  endPoints.forEach((type) => {
    promises.push(getGenreApi(type));
  });
  const data = await Promise.all(promises);

  data.map(({ genres }) => {
    return genres.map((item) => {
      allGenres[item.id] = item;
    });
  });
  // console.log(allGenres);
  return allGenres;
};
