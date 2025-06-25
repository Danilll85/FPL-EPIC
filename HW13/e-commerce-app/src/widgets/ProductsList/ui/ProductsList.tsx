import type { Theme } from "../../../app/providers/theme";
import { ProductsListWrapper } from "./styles";
import { CardItemMemo } from "../../../entities/CardItem/ui/index";
import { useAuth } from "../../../shared/lib/hooks/useAuth";
import { useFetch } from "../lib/hooks/useFetch";

interface Props {
  theme: Theme;
}

export const ProductsList = ({ theme }: Props) => {
  const { data } = useFetch();
  const { state } = useAuth();

  //all quantity values from fakeAPI is 0, so, in some parts will be hardcoded values
  const processedData = data?.map((elem) => {
    if (+elem.id % 2 == 0) {
      elem.quantity = +elem.id + 1;
    }

    return elem;
  });

  return (
    <ProductsListWrapper $theme={theme}>
      {processedData &&
        processedData.map((elem) => {
          return (
            <CardItemMemo
              key={elem.id}
              id={elem.id}
              title={elem.title}
              price={elem.price}
              image={elem.image}
              theme={theme}
              isLogged={state.isAuth}
            />
          );
        })}
    </ProductsListWrapper>
  );
};

/*
to-do grid ui
*/
