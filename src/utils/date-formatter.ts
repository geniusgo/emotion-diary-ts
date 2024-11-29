export const dateFormatter = (diaryDate: Date, format: string) => {
  const year = String(diaryDate.getFullYear());
  let month = String(diaryDate.getMonth() + 1);
  let date = String(diaryDate.getDate());

  if (month.length < 2) {
    month = '0' + month;
  }

  if (date.length < 2) {
    date = '0' + date;
  }

  return year + format + month + format + date;
};
