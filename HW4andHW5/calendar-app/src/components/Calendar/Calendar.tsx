import { useEffect, useState } from "react";
import { store, ChangeMonthAction, ChangeYearAction } from "../../store/store";
import { generateCalendar, months, weekDays, CalendarDay } from "../../utils/calendarUtils";
import { InputNote } from "../InputNote/InputNote";
import "./Calendar.scss";
import { convertDate } from "../../utils/convertDate";

type CalendarProps = {
  month: string;
  year: number;
};

type Note = {
  title: string;
  description?: string;
};

export const Calendar = ({ month, year }: CalendarProps) => {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[][]>([]);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  const [isModalOn, setModalOn] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [modalDay, setModalDay] = useState("");
  const [modalMonth, setModalMonth] = useState(month);
  const [modalYear, setModalYear] = useState(year);
  const [notesVersion, setNotesVersion] = useState(0);

  useEffect(() => {
    setCalendarDays(generateCalendar(currentMonth, currentYear));

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setCurrentMonth(state.month);
      setCurrentYear(state.year);
    });

    return unsubscribe;
  }, [currentMonth, currentYear, isModalOn, notesVersion]);

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

  const showModal = (e: React.MouseEvent<HTMLElement>, weekIndex: number, dayIndex: number) => {
    const target = e.target as HTMLElement;
    const day = target.innerText as string;
    const isCurrentMonth = calendarDays[weekIndex][dayIndex].currentMonth;

    //console.log(isCurrentMonth);

    if (!isCurrentMonth) {
      const index = months.findIndex((m) => m === currentMonth);
      if (weekIndex > 2) {
        setModalMonth(months[index + 1 === 12 ? 0 : index + 1]);
        setModalYear(index + 1 === 12 ? currentYear + 1 : currentYear);
      } else {
        setModalMonth(months[index - 1 === -1 ? 11 : index - 1]);
        setModalYear(index - 1 === -1 ? currentYear - 1 : currentYear);
      }
    } else {
      setModalMonth(currentMonth);
      setModalYear(currentYear);
    }

    //console.log(calendarDays);
    //console.log(weekIndex, dayIndex);

    setCurrentX(e.clientX);
    setCurrentY(e.clientY);
    setModalDay(day);
    setModalOn(true);
  };

  const removeNote = (key: string, index: number): void => {
    const notes = JSON.parse(localStorage.getItem(key) as string);

    notes.splice(index, 1);

    if (notes.length === 0) {
      localStorage.removeItem(key);
      setNotesVersion((prev) => prev + 1);
      return;
    }

    localStorage.setItem(key, JSON.stringify(notes));
    setNotesVersion((prev) => prev + 1);
  };

  const drawNotes = (day: CalendarDay, weekIndex: number) => {
    let keyMonth: string = currentMonth;
    let keyYear: number = currentYear;

    if (!day.currentMonth) {
      const index = months.findIndex((m) => m === currentMonth);
      if (weekIndex > 2) {
        const nextMonth = index === 11 ? 0 : index + 1;
        keyMonth = months[nextMonth];
        keyYear = nextMonth === 0 ? keyYear + 1 : keyYear;
        console.log(`next month ${keyMonth} ${keyYear}`);
      } else {
        const prevMonth = index === 0 ? 11 : index - 1;
        keyMonth = months[prevMonth];
        keyYear = prevMonth === 11 ? keyYear - 1 : keyYear;
        console.log(`prev month ${keyMonth} ${keyYear}`);
      }
    }

    const key: string = convertDate(day.day.toString(), keyMonth, keyYear.toString());

    const notes: Note[] = JSON.parse(localStorage.getItem(key) as string);

    if (notes) {
      const noteElements = notes.map((note: Note, index: number) => (
        <div className="note-elem" key={`${index}-${note.title}`}>
          {note.title}{" "}
          <button
            id="remove-note"
            onClick={() => {
              removeNote(key, index);
            }}
          >
            <img src="../../assets/trash.svg" alt="drop" />
          </button>
        </div>
      ));

      return noteElements;
    }

    return null;
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
                    className={`date-cell ${!day.currentMonth ? "other-month" : ""} `}
                  >
                    <div
                      className={day.isToday ? "today" : ""}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        showModal(e, weekIndex, dayIndex);
                      }}
                    >
                      {day.day}
                    </div>
                    <div className="notes-wrapper">{day.hasNotes && drawNotes(day, weekIndex)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOn && (
          <div
            className="input-note-wrapper"
            style={{ position: "absolute", top: `${currentY + 10}px`, left: `${currentX + 10}px` }}
          >
            <InputNote day={modalDay} month={modalMonth} year={modalYear.toString()} setModalOn={setModalOn} />
          </div>
        )}
      </div>
    </div>
  );
};
