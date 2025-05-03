import { useEffect, useState } from "react";
import { store, ChangeMonthAction, ChangeYearAction } from "../../store/store";
import { generateCalendar, months, weekDays, CalendarDay } from "../../utils/calendarUtils";
import { InputNote } from "../InputNote/InputNote";
import "./Calendar.scss";

type CalendarProps = {
  month: string;
  year: number;
};

export const Calendar = ({ month, year }: CalendarProps) => {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[][]>([]);
  const [currentday, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  const [isModalOn, setModalOn] = useState(false);

  useEffect(() => {
    setCalendarDays(generateCalendar(currentMonth, currentYear));

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setCurrentMonth(state.month);
      setCurrentYear(state.year);
    });

    return unsubscribe;
  }, [currentMonth, currentYear]);

  const dispatchDate = (monthIndex: number, year: number) => {
    store.dispatch({
      type: "changeMonth",
      value: months[monthIndex],
    } satisfies ChangeMonthAction);

    store.dispatch({
      type: "changeYear",
      value: year,
    } satisfies ChangeYearAction);
  };

  const goToPreviousMonth = () => {
    const index = months.findIndex((m) => m === currentMonth);
    const prevMonth = index === 0 ? 11 : index - 1;
    const yearDelta = index === 0 ? -1 : 0;
    dispatchDate(prevMonth, currentYear + yearDelta);
  };

  const goToNextMonth = () => {
    const index = months.findIndex((m) => m === currentMonth);
    const nextMonth = index === 11 ? 0 : index + 1;
    const yearDelta = index === 11 ? 1 : 0;
    dispatchDate(nextMonth, currentYear + yearDelta);
  };

  const goToToday = () => {
    const today = new Date();
    dispatchDate(today.getMonth(), today.getFullYear());
  };

  const showModal = (e: React.MouseEvent) => {
    setCurrentDay(e.currentTarget.innerHTML);
    setModalOn(true);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={goToPreviousMonth}>
          &lt;
        </button>
        <div className="header-center">
          <h2>
            {currentMonth} {currentYear}
          </h2>
          <button className="today-button" onClick={goToToday}>
            Today
          </button>
        </div>
        <button className="nav-button" onClick={goToNextMonth}>
          &gt;
        </button>
      </div>

      <div className="calendar-table">
        <table>
          <thead>
            <tr>
              {weekDays.map((day) => (
                <th key={day} className="weekday-cell">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarDays.map((week, weekIndex) => (
              <tr key={`week-${weekIndex}`}>
                {week.map((day, dayIndex) => (
                  <td
                    key={`day-${weekIndex}-${dayIndex}`}
                    className={`date-cell ${!day.currentMonth ? "other-month" : ""} ${day.isToday ? "today" : ""}`}
                    onClick={showModal}
                  >
                    {day.day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOn && (
          <div className="input-note-wrapper">
            <InputNote day={currentday} month={currentMonth} year={currentYear.toString()} />
          </div>
        )}
      </div>
    </div>
  );
};
