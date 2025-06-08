import { createContext, type Dispatch, type SetStateAction } from "react";

type Currency = {
  amount: number;
  title: string;
};

type ContextState = {
  fromCurrency: Currency;
  toCurrency: Currency;
};

type ContextType = {
  state: ContextState[];
  setState: Dispatch<SetStateAction<ContextState[]>>;
};

export const defaultState: ContextState[] = [
  {
    fromCurrency: { amount: 1, title: "USD" },
    toCurrency: { amount: 0.87, title: "EUR" },
  },
];

export const Context = createContext<ContextType>({
  state: defaultState,
  setState: () => {},
});
