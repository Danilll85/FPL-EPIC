import { generateCalendar, getMonthIndex } from "../calendarUtils";

describe("generateCalendar", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2025-04-21"));
        // Mock current date to April 21, 2025
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("fills month correctly with proper day numbers and flags", () => {
        const calendar = generateCalendar("April", 2025);

        expect(calendar.length).toBe(6);

        const firstWeek = calendar[0];
        expect(firstWeek.map((d) => d.day)).toEqual([30, 31, 1, 2, 3, 4, 5]);
        expect(firstWeek.map((d) => d.currentMonth)).toEqual([
            false,
            false,
            true,
            true,
            true,
            true,
            true,
        ]);

        const aprilDays = calendar.flat().filter((d) => d.currentMonth);
        expect(aprilDays.length).toBe(30);
        expect(aprilDays.map((d) => d.day)).toEqual(
            Array.from({ length: 30 }, (_, i) => i + 1)
        );

        const lastWeek = calendar[4];
        expect(lastWeek.map((d) => d.day)).toEqual([27, 28, 29, 30, 1, 2, 3]);
        expect(lastWeek.map((d) => d.currentMonth)).toEqual([
            true,
            true,
            true,
            true,
            false,
            false,
            false,
        ]);

        const finalWeek = calendar[5];
        expect(finalWeek.map((d) => d.day)).toEqual([4, 5, 6, 7, 8, 9, 10]);
        expect(finalWeek.every((d) => !d.currentMonth)).toBe(true);

        const today = calendar.flat().find((day) => day.isToday);
        expect(today).toBeDefined();
        expect(today?.day).toBe(21);
        expect(today?.currentMonth).toBe(true);
    });

    it("returns empty array for invalid month", () => {
        const result = generateCalendar("NotAMonth", 2024);
        expect(result).toEqual([]);
    });

    it("returns 6 weeks with 7 days each for a standard month", () => {
        const calendar = generateCalendar("April", 2025);
        expect(calendar.length).toBe(6);
        calendar.forEach((week) => {
            expect(week.length).toBe(7);
        });
    });

    it("does not mark any day as today for unrelated month/year", () => {
        const calendar = generateCalendar("January", 1999);
        const todayMarked = calendar.flat().some((day) => day.isToday);
        expect(todayMarked).toBe(false);
    });

    it("fills in previous month days if the month does not start on Sunday", () => {
        const calendar = generateCalendar("April", 2025);
        const firstWeek = calendar[0];

        expect(firstWeek[0].currentMonth).toBe(false); // March 30
        expect(firstWeek[1].currentMonth).toBe(false); // March 31
        expect(firstWeek[2].day).toBe(1); // April 1
        expect(firstWeek[2].currentMonth).toBe(true);
    });

    it("marks today correctly for current month", () => {
        const calendar = generateCalendar("April", 2025);
        const todayMarked = calendar.flat().filter((day) => day.isToday);
        expect(todayMarked).toHaveLength(1);
        expect(todayMarked[0].day).toBe(21);
    });

    it("starts with current month days when month begins on Sunday", () => {
        const calendar = generateCalendar("October", 2023); // Oct 1, 2023 is Sunday
        const firstWeek = calendar[0];
        expect(firstWeek[0]).toEqual({
            day: 1,
            currentMonth: true,
            isToday: false,
        });
    });

    it("generates 28 days for February in a non-leap year", () => {
        const calendar = generateCalendar("February", 2025);
        const currentDays = calendar.flat().filter((d) => d.currentMonth);
        expect(currentDays.length).toBe(28);
    });

    it("fills correct previous month days", () => {
        const calendar = generateCalendar("April", 2025);
        const firstWeek = calendar[0];
        expect(firstWeek[0].day).toBe(30); // March 30
        expect(firstWeek[1].day).toBe(31); // March 31
        expect(firstWeek[0].currentMonth).toBe(false);
    });
});

describe("getMonthIndex", () => {
    it("returns correct index for valid month names", () => {
        expect(getMonthIndex("January")).toBe(0);
        expect(getMonthIndex("February")).toBe(1);
        expect(getMonthIndex("March")).toBe(2);
        expect(getMonthIndex("April")).toBe(3);
        expect(getMonthIndex("May")).toBe(4);
        expect(getMonthIndex("June")).toBe(5);
        expect(getMonthIndex("July")).toBe(6);
        expect(getMonthIndex("August")).toBe(7);
        expect(getMonthIndex("September")).toBe(8);
        expect(getMonthIndex("October")).toBe(9);
        expect(getMonthIndex("November")).toBe(10);
        expect(getMonthIndex("December")).toBe(11);
    });

    it("returns -1 for invalid month names", () => {
        expect(getMonthIndex("Januar")).toBe(-1);
        expect(getMonthIndex("")).toBe(-1);
    });

    it("is case-sensitive", () => {
        expect(getMonthIndex("january")).toBe(-1);
        expect(getMonthIndex("JANUARY")).toBe(-1);
    });
});
