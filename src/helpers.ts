const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatMonthDay = (date: string) => {
  const fixedDate = new Date(date);
  return `${months[fixedDate.getMonth()]} ${fixedDate.getDate()}`;
};

export const sortByDate = (a: any, b: any) => {
  const [aMonth, aDay] = a.Date.split(" ");
  const [bMonth, bDay] = b.Date.split(" ");

  const aDate: any = new Date(2000, months.indexOf(aMonth), parseInt(aDay));
  const bDate: any = new Date(2000, months.indexOf(bMonth), parseInt(bDay));

  return aDate - bDate;
};
