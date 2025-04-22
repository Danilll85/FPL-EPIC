export interface CalendarDay {
    day: number;
    currentMonth: boolean;
    isToday: boolean;
}

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

export const getMonthIndex = (month: string) =>
    months.findIndex((m) => m === month);

export const generateCalendar = (
    month: string,
    year: number
): CalendarDay[][] => {
    const monthIndex = getMonthIndex(month);
    if (monthIndex === -1) return [];

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const firstDay = new Date(year, monthIndex, 1).getDay();
    const lastDate = new Date(year, monthIndex + 1, 0).getDate();
    const prevLastDate = new Date(year, monthIndex, 0).getDate();

    const calendar: CalendarDay[][] = [];
    let week: CalendarDay[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
        const day = prevLastDate - i;
        week.push({
            day,
            currentMonth: false,
            isToday: false,
        });
    }

    for (let i = 1; i <= lastDate; i++) {
        week.push({
            day: i,
            currentMonth: true,
            isToday:
                i === todayDate &&
                monthIndex === todayMonth &&
                year === todayYear,
        });

        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    let nextDay = 1;
    while (week.length && week.length < 7) {
        week.push({
            day: nextDay++,
            currentMonth: false,
            isToday: false,
        });
    }

    if (week.length) {
        calendar.push(week);
    }

    while (calendar.length < 6) {
        const extraWeek: CalendarDay[] = [];
        for (let i = 0; i < 7; i++) {
            extraWeek.push({
                day: nextDay++,
                currentMonth: false,
                isToday: false,
            });
        }
        calendar.push(extraWeek);
    }

    return calendar;
};
