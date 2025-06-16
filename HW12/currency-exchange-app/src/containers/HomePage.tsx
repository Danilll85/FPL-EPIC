import { Navbar } from "../components/Navbar/Navbar";
import { ConverterComponent } from "../components/ConverterComponent/ConverterComponent";
import { ExchangeHistoryComponent } from "../components/ExchangeHistoryComponent/ExchangeHistoryComponent";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <ConverterComponent />
      <ExchangeHistoryComponent />
    </>
  );
};
