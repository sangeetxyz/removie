import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, TMDB_TOKEN } from "../utils/links/links";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    setIsLoading(true);
    setError(null);
    axios
      .get(BASE_URL + url, {
        headers: {
          Authorization: "Bearer " + TMDB_TOKEN,
        },
        params,
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);
  return { data, isLoading, error };
};

export { useFetch };
