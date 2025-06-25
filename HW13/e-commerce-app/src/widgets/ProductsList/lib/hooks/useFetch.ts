import { useEffect, useState } from "react";
import { URL } from "../../config/storeAPI";

export type Data = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};


export const useFetch = () => {
  const [data, setData] = useState<Data[] | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(isLoading);

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  return { data, isLoading, error };
};
