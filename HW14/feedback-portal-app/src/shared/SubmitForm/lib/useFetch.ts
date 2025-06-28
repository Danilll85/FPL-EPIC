import { useEffect, useState } from "react";
import { URL } from "../config/url";

export const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((e) => {
        setError(e);
      });
  }, [URL]);

  return { data, isLoading, error };
};
