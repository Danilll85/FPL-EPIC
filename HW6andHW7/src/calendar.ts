// calendar.ts
export class Calendar {
  private year: number;
  private month: number;
  private months: string[] = [
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
  private days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  constructor(year: number, month: number | string) {
    if (typeof month === "string") {
      const monthIndex = this.months.findIndex((m) => m.toLowerCase() === month.toLowerCase());
      if (monthIndex === -1) throw new Error("Incorrect month");
      this.month = monthIndex + 1;
    } else {
      if (month < 1 || month > 12) throw new Error("Incorrect month");
      this.month = month;
    }
    this.year = year;
  }

  public getMonthDays(): { day: number; date: Date }[] {
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        date: new Date(this.year, this.month - 1, day),
      });
    }

    return days;
  }

  public draw(): HTMLElement {
    const container = document.createElement("div");
    container.className = "calendar-container";

    const daysHeader = document.createElement("div");
    daysHeader.className = "calendar-days-header";
    this.days.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.textContent = day;
      daysHeader.appendChild(dayElement);
    });
    container.appendChild(daysHeader);

    const daysGrid = document.createElement("div");
    daysGrid.className = "calendar-days-grid";

    const firstDay = new Date(this.year, this.month - 1, 1);
    const startingDay = firstDay.getDay();

    for (let i = 0; i < startingDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-day empty";
      daysGrid.appendChild(emptyCell);
    }

    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day.toString();
      dayElement.dataset.day = day.toString();
      dayElement.dataset.month = this.month.toString();
      dayElement.dataset.year = this.year.toString();
      daysGrid.appendChild(dayElement);
    }

    container.appendChild(daysGrid);
    return container;
  }

  public static getCurrentMonth(): { year: number; month: number } {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    };
  }
}
