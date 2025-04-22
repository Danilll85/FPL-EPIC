import { ChangeMonthAction, ChangeYearAction, store } from "../../store/store";
import "./InputDate.scss";

export const InputDate = () => {
  const months: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > 4) {
      event.target.value = value.slice(0, 4);
      return;
    }

    const year = +event.target.value;

    if (year >= 1900 && year <= 2030) {
      store.dispatch({ type: "changeYear", value: year } satisfies ChangeYearAction);
    }
  };

  return (
    <div className="input-wrapper">
      <span>Set Date</span>
      <select
        name="months"
        id="months"
        defaultValue=""
        onChange={($event) =>
          store.dispatch({ type: "changeMonth", value: $event.target.value } satisfies ChangeMonthAction)
        }
      >
        <option value="" disabled hidden>
          Choose Month
        </option>
        {months.map((month: string) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Choose Year between 1900 and 2030"
        min={1900}
        max={2030}
        onKeyDown={(e) => {
          if (
            !(
              /[0-9]/.test(e.key) ||
              e.key === "Backspace" ||
              e.key === "Delete" ||
              e.key === "ArrowLeft" ||
              e.key === "ArrowRight" ||
              e.key === "Tab"
            )
          ) {
            e.preventDefault();
          }
        }}
        // onChange={($event) =>
        //   store.dispatch({ type: "changeYear", value: +$event.target.value } satisfies ChangeYearAction)
        // }
        onChange={handleYearChange}
      />
    </div>
  );
};
