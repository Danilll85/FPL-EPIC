import { FormControl, InputLabel, Select, MenuItem, Button, TextField, SvgIcon } from "@mui/material";
import { Header1, ConverterComponentWrapper, ConvertBlock } from "./styles";
import { useEffect, useState } from "react";

const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

export const ConverterComponent = () => {
  const [amount, setAmount] = useState("0");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        const result = res.json();
        return result;
      })
      .catch((err) => {
        console.log(`fetching error`);
      })
      .then((data) => {
        setCurrencies(data);
        console.log(data);
      });
  }, []);

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
            value={40}
            label="From"
            //   onChange={handleChange}
          >
            {currencies.map((elem) => {
              console.log(elem);
              
            })

            }
            {/* <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>BYN</MenuItem> */}
          </Select>
        </FormControl>

        <Button sx={{ marginInline: "1rem", outline: "1px solid #009788" }}>
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
            value={40}
            label="From"
            //   onChange={handleChange}
          >
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>BYN</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" sx={{ backgroundColor: "#009788", paddingInline: "2rem" }}>
          Convert
        </Button>
      </ConvertBlock>
    </ConverterComponentWrapper>
  );
};
