export type CalendarDay = {
  day: number;
  currentMonth: boolean;
  isToday: boolean;
  hasNotes: boolean;
};

export const months = [
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

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getMonthIndex = (month: string) => months.findIndex((m) => m === month);

export const generateCalendar = (month: string, year: number): CalendarDay[][] => {
  const monthIndex = getMonthIndex(month); //4
  if (monthIndex === -1) return [];

  const today = new Date();
  const todayDate = today.getDate(); //today day number
  const todayMonth = today.getMonth(); //month index
  const todayYear = today.getFullYear(); //year

  const firstDay = new Date(year, monthIndex, 1).getDay(); //position in week (start from sunday)
  const lastDate = new Date(year, monthIndex + 1, 0).getDate(); //day number
  const prevLastDate = new Date(year, monthIndex, 0).getDate();

  const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
  const nextMonthYear = monthIndex === 11 ? year + 1 : year;

  const keysFromLocaleStorage: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string;
    keysFromLocaleStorage.push(key);
    //console.log(`[key] ${key}`);
  }

  const calendar: CalendarDay[][] = [];
  let week: CalendarDay[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    const day: number = prevLastDate - i;
    const flag: boolean = keysFromLocaleStorage.includes(
      `${day}-${monthIndex == 0 ? 11 : monthIndex - 1}-${monthIndex == 0 ? year - 1 : year}`
    );
    week.push({
      day,
      currentMonth: false,
      isToday: false,
      hasNotes: flag,
    });
  }

  for (let i = 1; i <= lastDate; i++) {
    const flag: boolean = keysFromLocaleStorage.includes(
      `${i}-${monthIndex == 0 ? 11 : monthIndex}-${monthIndex == 0 ? year - 1 : year}`
    );
    week.push({
      day: i,
      currentMonth: true,
      isToday: i === todayDate && monthIndex === todayMonth && year === todayYear,
      hasNotes: flag,
    });

    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  let nextDay = 1;
  while (week.length && week.length < 7) {
    const day = nextDay++;
    const hasNotes = keysFromLocaleStorage.includes(`${day}-${nextMonthIndex}-${nextMonthYear}`);
    week.push({
      day: day,
      currentMonth: false,
      isToday: false,
      hasNotes: hasNotes,
    });
  }

  if (week.length) {
    calendar.push(week);
  }

  while (calendar.length < 6) {
    const extraWeek: CalendarDay[] = [];
    for (let i = 0; i < 7; i++) {
      const day = nextDay++;
      const hasNotes = keysFromLocaleStorage.includes(`${day}-${nextMonthIndex}-${nextMonthYear}`);
      extraWeek.push({
        day: day,
        currentMonth: false,
        isToday: false,
        hasNotes: hasNotes,
      });
    }
    calendar.push(extraWeek);
  }

  return calendar;
};
