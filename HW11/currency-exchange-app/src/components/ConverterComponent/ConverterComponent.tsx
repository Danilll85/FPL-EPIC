import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  SvgIcon,
  type SelectChangeEvent,
} from "@mui/material";
import {
  Header1,
  ConverterComponentWrapper,
  ConvertBlock,
  ResultBlock,
  Result,
  PopularCurrenciesBlock,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import type { PopularCurrencies } from "../../interfaces/PopularCurrencies";
import type { ApiResponse } from "../../types/generics/ApiResponse";
import { Context } from "../../context";

const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const UsdURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

export const ConverterComponent = () => {
  const [amount, setAmount] = useState("0");
  const [convertedValue, setConvertedValue] = useState(0);
  const [currencies, setCurrencies] = useState({});
  const [fromCurrencyTitle, setFromCurrencyTitle] = useState("USD");
  const [toCurrencyTitle, setToCurrencyTitle] = useState("EUR");
  const [popularCurrencies, setPopularCurrencies] = useState<PopularCurrencies>({ UsdToEur: 0, EurToUsd: 0 });
  const [showResult, setShowResult] = useState(false);
  const data = useContext(Context);
  console.log(data);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        const result = res.json();
        return result;
      })
      .catch((err) => {
        console.log(`fetching error ${err}`);
      })
      .then((data: ApiResponse) => {
        setCurrencies(data);
        console.log(data);
      });

    fetch(UsdURL)
      .then((res) => {
        const result = res.json();
        return result;
      })
      .then((data) => {
        setPopularCurrencies({ UsdToEur: data["usd"]["eur"], EurToUsd: 1 / data["usd"]["eur"] });
      });
  }, []);

  useEffect(() => {
    if (fromCurrencyTitle && toCurrencyTitle && amount !== "0") {
      convert();
    }
  }, [fromCurrencyTitle, toCurrencyTitle, amount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(+value)) {
      if (e.target.value === ".") {
        setAmount(".");
      } else {
        return;
      }
    }

    setAmount(value);
  };

  const handleSelectChange = (e: SelectChangeEvent<typeof fromCurrencyTitle>) => {
    const name = e.target.name;
    name === "inputFrom" ? setFromCurrencyTitle(e.target.value) : setToCurrencyTitle(e.target.value);
  };

  const swapCurrencies = () => {
    const tmp = fromCurrencyTitle;
    new Promise((res, rej): void => {
      setFromCurrencyTitle(toCurrencyTitle);
      setToCurrencyTitle(tmp);
      res(0);
    });
  };

  const convert = () => {
    if (+amount == 0) return;

    const testURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrencyTitle.toLowerCase()}.min.json`;
    fetch(testURL)
      .then((res) => {
        const result = res.json();
        return result;
      })
      .catch(() => {
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        const result = +amount * data[fromCurrencyTitle][toCurrencyTitle];
        setConvertedValue(result);
      });
  };

  const updateState = () => {
    const newState = {
      fromCurrency: { amount: +amount, title: fromCurrencyTitle },
      toCurrency: { amount: convertedValue, title: toCurrencyTitle },
    };

    data.setState((prev) => [...prev, newState]);
    // data.setState([...data.state, newState]);
  };

  return (
    <ConverterComponentWrapper>
      <Header1>I want to convert</Header1>

      <ConvertBlock>
        {/* Amount */}
        <TextField
          id="standard-basic"
          label="Amount"
          variant="standard"
          onChange={handleAmountChange}
          value={amount}
          sx={{ width: "20rem" }}
        />

        {/* From */}
        <FormControl sx={{ width: "30rem" }}>
          <InputLabel id="demo-simple-select-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="From"
            value={fromCurrencyTitle}
            name="inputFrom"
            onChange={handleSelectChange}
          >
            {currencies &&
              Object.keys(currencies).map((title) => (
                <MenuItem key={title} value={title}>
                  {title.toUpperCase()}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <Button sx={{ marginInline: "1rem", outline: "1px solid #009788" }} onClick={swapCurrencies}>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 385.87"
            >
              <path
                fill-rule="nonzero"
                d="M214.19 67.27h149.05V8.17c0-4.51 3.66-8.17 8.17-8.17 2.21 0 4.21.87 5.68 2.29l132.02 112.09c3.44 2.91 3.87 8.06.96 11.49-.32.39-.67.73-1.05 1.04L376.68 239.27c-3.44 2.91-8.59 2.48-11.49-.96a8.098 8.098 0 0 1-1.93-5.27l-.02-59.1H214.19c-4.51 0-8.17-3.66-8.17-8.17V75.45c0-4.52 3.66-8.18 8.17-8.18zm75.44 161.02H140.59c-4.51 0-8.17-3.66-8.17-8.18v-49.63L20.76 265.27l111.66 94.8v-49.64c0-4.51 3.66-8.17 8.17-8.17h149.04v-73.97zm-140.87-16.35h149.05c4.51 0 8.17 3.66 8.17 8.17v90.32c0 4.52-3.66 8.18-8.17 8.18H148.76v59.1a8.268 8.268 0 0 1-1.95 5.27c-2.9 3.43-8.05 3.86-11.49.96L2.98 271.58c-.38-.31-.73-.66-1.05-1.04-2.91-3.44-2.48-8.59.96-11.49l132.02-112.09a8.141 8.141 0 0 1 5.68-2.29c4.51 0 8.17 3.66 8.17 8.17v59.1zM371.41 83.62H222.37v73.97h149.04c4.52 0 8.18 3.66 8.18 8.18v49.64l111.65-94.8-111.65-94.8v49.64c0 4.51-3.66 8.17-8.18 8.17z"
              />
            </svg>
          </SvgIcon>
        </Button>

        {/* To */}
        <FormControl sx={{ width: "30rem" }}>
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={toCurrencyTitle}
            name="inputTo"
            label="From"
            onChange={handleSelectChange}
          >
            {Object.keys(currencies).map((title) => (
              <MenuItem key={title} value={title}>
                {title.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#009788", paddingInline: "2rem" }}
          onClick={() => {
            convert();
            updateState();
            setShowResult(true);
          }}
        >
          Convert
        </Button>
      </ConvertBlock>
      {showResult && (
        <ResultBlock>
          {amount} {fromCurrencyTitle.toUpperCase()}&nbsp;=&nbsp;
          <Result>
            {convertedValue} {toCurrencyTitle.toUpperCase()}
          </Result>
        </ResultBlock>
      )}
      <PopularCurrenciesBlock>
        <p>1 USD = {popularCurrencies.UsdToEur} EUR</p>
        <p>1 EUR = {popularCurrencies.EurToUsd} USD</p>
      </PopularCurrenciesBlock>
    </ConverterComponentWrapper>
  );
};
