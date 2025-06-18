import { createContext, useId, type Dispatch, type SetStateAction } from "react";

type Currency = {
  amount: number;
  title: string;
};

type ContextState = {
  id: string,
  fromCurrency: Currency;
  toCurrency: Currency;
};

type ContextType = {
  state: ContextState[];
  setState: Dispatch<SetStateAction<ContextState[]>>;
};

export const defaultState: ContextState[] = [
  {
    id: 'f1',
    fromCurrency: { amount: 1, title: "USD" },
    toCurrency: { amount: 0.87, title: "EUR" },
  },
];

export const Context = createContext<ContextType>({
  state: defaultState,
  setState: () => {},
});
