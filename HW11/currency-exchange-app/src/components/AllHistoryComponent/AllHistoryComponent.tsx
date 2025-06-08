import { useContext } from "react";
import { Context } from "../../context";
import { AllHistoryWrapper, Arrow, Currency, CurrencyPair, HistoryItem, HistoryList, Title } from "./styles";

export const AllHistoryComponent = () => {
  const { state } = useContext(Context);

  return (
    <AllHistoryWrapper>
      <Title>Conversion History</Title>
      <HistoryList>
        {state.map((elem, index) => (
          <HistoryItem key={index}>
            <CurrencyPair>
              <Currency>
                {elem.fromCurrency.amount.toFixed(2)} {elem.fromCurrency.title}
              </Currency>
              <Arrow>→</Arrow>
              <Currency>
                {elem.toCurrency.amount.toFixed(2)} {elem.toCurrency.title}
              </Currency>
            </CurrencyPair>
          </HistoryItem>
        ))}
      </HistoryList>
    </AllHistoryWrapper>
  );
};
