import { useContext, useEffect } from "react";
import { AllHistoryWrapper } from "./styles";
import { Context } from "../../context";

export const AllHistoryComponent = () => {
  const data = useContext(Context);

  return (
    <AllHistoryWrapper>
      All History <br />
      {data.state.map((elem) => {
        return (
          <div>
            <span>
              {elem.fromCurrency.amount} {elem.fromCurrency.title}
            </span>{" "}
            <span>-</span>{" "}
            <span>
              {elem.toCurrency.amount} {elem.toCurrency.title}
            </span>
            <br />
          </div>
        );
      })}
    </AllHistoryWrapper>
  );
};
