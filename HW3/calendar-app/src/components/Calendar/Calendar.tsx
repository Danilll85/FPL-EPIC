import { useEffect } from "react";
import { store } from "../../store/store";
import "./Calendar.scss";
import { drawCalendar } from "../../utils/getCalendar";

interface CalendarProps {
  month: string;
  year: number;
}

export const Calendar = ({ month, year }: CalendarProps) => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const currentState = store.getState();
      console.log(currentState.month);
      console.log(currentState.year);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {month}
      {year}
    </>
  );
};
