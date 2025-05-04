const months = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

type MonthKey = keyof typeof months;

export const convertDate = (day: string, month: string, year: string): string => {
  console.log(`[convertDate] ${day}-${month}-${year}`);

  if (month.toLowerCase() in months) {
    return `${day}-${months[month.toLowerCase() as MonthKey]}-${year}`;
  }
  throw new Error("Invalid month");
};
