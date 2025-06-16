import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      setIsLoading(false);
      setData(data);
      setError(null);
      console.log(data);
    } catch (e) {
      setIsLoading(false);
      setError(e instanceof Error ? e.message : "Unknown error occured");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
