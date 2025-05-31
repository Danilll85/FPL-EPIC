import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from "@mui/material";

export const ConverterComponent = () => {
  return (
    <div className="converter-component-wrapper">
      <h1>I want to convert</h1>

      {/* Amount */}
      <TextField id="standard-basic" label="Amount" variant="standard" />

      {/* From */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">From</InputLabel>
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

      {/* To */}
      <FormControl fullWidth>
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

      {/* Convert Button */}
      <Button variant="contained">Convert</Button>
    </div>
  );
};
