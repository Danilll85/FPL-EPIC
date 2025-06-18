import { useContext } from "react";
import { Context } from "../../context";
import { AllHistoryWrapper, Arrow, Currency, CurrencyPair, HistoryItem, HistoryList, StyledNavLink, Title } from "./styles";

export const AllHistoryComponent = () => {
  const { state } = useContext(Context);

  return (
    <AllHistoryWrapper>
      <Title>Conversion History</Title>
      <HistoryList>
        {state.map((elem) => (
          <HistoryItem key={elem.id}>
            <CurrencyPair>
              <Currency>
                {elem.fromCurrency.amount.toFixed(2)} <StyledNavLink to="/currency-info">{elem.fromCurrency.title.toUpperCase()}</StyledNavLink>
              </Currency>
              <Arrow>→</Arrow>
              <Currency>
                {elem.toCurrency.amount.toFixed(2)} <StyledNavLink to="/currency-info">{elem.toCurrency.title.toUpperCase()}</StyledNavLink>
              </Currency>
            </CurrencyPair>
          </HistoryItem>
        ))}
      </HistoryList>
    </AllHistoryWrapper>
  );
};
