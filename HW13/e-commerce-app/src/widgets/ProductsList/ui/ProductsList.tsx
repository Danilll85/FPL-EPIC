import { useEffect, useState } from "react";
import type { Theme } from "../../../app/providers/context";
import { ProductsListWrapper } from "./styles";
import { URL } from "../config/storeAPI";
import { CardItem } from "../../../entities/CardItem";

interface Props {
  theme: Theme;
}

type Data = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export const ProductsList = ({ theme }: Props) => {
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductsListWrapper $theme={theme}>
      {data &&
        data.map((elem) => {
          //all quantity values from fakeAPI is 0, so, in some parts will be hardcoded values
          if (+elem.id % 2 == 0) {
            elem.quantity = +elem.id + 1;
          }

          return (
            <CardItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              quantity={elem.quantity}
              image={elem.image}
            />
          );
        })}
    </ProductsListWrapper>
  );
};

/*
to-do grid ui
*/
