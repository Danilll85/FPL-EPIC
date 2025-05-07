import { Calendar } from "../Calendar/Calendar.tsx";
import { InputDate } from "../InputDate/InputDate.tsx";
import { store } from "../../store/store.ts";

function App() {
  return (
    <>
      <InputDate />
      <Calendar month={store.getState().month} year={store.getState().year} />
    </>
  );
}

export default App;
