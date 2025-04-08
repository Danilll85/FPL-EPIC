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
        min={1950}
        max={2025}
        onChange={($event) =>
          store.dispatch({ type: "changeYear", value: +$event.target.value } satisfies ChangeYearAction)
        }
      />
    </div>
  );
};
