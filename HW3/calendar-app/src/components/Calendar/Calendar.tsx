import { useEffect, useState } from "react";
import { store, ChangeMonthAction, ChangeYearAction } from "../../store/store";
import "./Calendar.scss";

interface CalendarProps {
  month: string;
  year: number;
}

interface CalendarDay {
  day: number;
  currentMonth: boolean;
  isToday: boolean;
}

export const Calendar = ({ month, year }: CalendarProps) => {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[][]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>(month);
  const [currentYear, setCurrentYear] = useState<number>(year);

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

  const weekDays: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setCurrentMonth(state.month);
      setCurrentYear(state.year);
    });

    return unsubscribe;
  }, [currentMonth, currentYear]);

  const generateCalendar = (month: string, year: number) => {
    if (!month || !year) return;

    const monthIndex = months.findIndex((m) => m === month);
    if (monthIndex === -1) return;

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const firstDay = new Date(year, monthIndex, 1);
    const firstDayIndex = firstDay.getDay();

    const lastDay = new Date(year, monthIndex + 1, 0);
    const lastDate = lastDay.getDate();

    const prevLastDay = new Date(year, monthIndex, 0);
    const prevLastDate = prevLastDay.getDate();

    const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
    const prevYear = monthIndex === 0 ? year - 1 : year;
    const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
    const nextYear = monthIndex === 11 ? year + 1 : year;

    const calendarArray: CalendarDay[][] = [];
    let week: CalendarDay[] = [];

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const day = prevLastDate - i;
      week.push({
        day,
        currentMonth: false,
        isToday: prevYear === todayYear && prevMonthIndex === todayMonth && day === todayDate,
      });
    }

    for (let i = 1; i <= lastDate; i++) {
      week.push({
        day: i,
        currentMonth: true,
        isToday: year === todayYear && monthIndex === todayMonth && i === todayDate,
      });

      if (week.length === 7) {
        calendarArray.push(week);
        week = [];
      }
    }

    let nextMonthDay = 1;
    while (week.length > 0 && week.length < 7) {
      week.push({
        day: nextMonthDay,
        currentMonth: false,
        isToday: nextYear === todayYear && nextMonthIndex === todayMonth && nextMonthDay === todayDate,
      });
      nextMonthDay++;
    }

    if (week.length === 7) {
      calendarArray.push(week);
    }

    while (calendarArray.length < 6) {
      const nextWeek: CalendarDay[] = [];
      for (let i = 0; i < 7; i++) {
        nextWeek.push({
          day: nextMonthDay,
          currentMonth: false,
          isToday: nextYear === todayYear && nextMonthIndex === todayMonth && nextMonthDay === todayDate,
        });
        nextMonthDay++;
      }
      calendarArray.push(nextWeek);
    }

    setCalendarDays(calendarArray);
  };

  const goToPreviousMonth = () => {
    const monthIndex = months.findIndex((m) => m === currentMonth);

    if (monthIndex === 0) {
      store.dispatch({
        type: "changeMonth",
        value: months[11],
      } satisfies ChangeMonthAction);

      store.dispatch({
        type: "changeYear",
        value: currentYear - 1,
      } satisfies ChangeYearAction);
    } else {
      store.dispatch({
        type: "changeMonth",
        value: months[monthIndex - 1],
      } satisfies ChangeMonthAction);
    }
  };

  const goToNextMonth = () => {
    const monthIndex = months.findIndex((m) => m === currentMonth);

    if (monthIndex === 11) {
      store.dispatch({
        type: "changeMonth",
        value: months[0],
      } satisfies ChangeMonthAction);

      store.dispatch({
        type: "changeYear",
        value: currentYear + 1,
      } satisfies ChangeYearAction);
    } else {
      store.dispatch({
        type: "changeMonth",
        value: months[monthIndex + 1],
      } satisfies ChangeMonthAction);
    }
  };

  const goToToday = () => {
    const today = new Date();
    const currentMonth = months[today.getMonth()];
    const currentYear = today.getFullYear();

    store.dispatch({
      type: "changeMonth",
      value: currentMonth,
    } satisfies ChangeMonthAction);

    store.dispatch({
      type: "changeYear",
      value: currentYear,
    } satisfies ChangeYearAction);
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
                  >
                    {day.day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
