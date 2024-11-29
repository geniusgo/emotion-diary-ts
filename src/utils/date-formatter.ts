export const dateFormatter = (diaryDate: Date, format: string) => {
  const year = String(diaryDate.getFullYear());
  let month = String(diaryDate.getMonth() + 1);
  const date = String(diaryDate.getDate());

  if (month.length < 2) {
    month = '0' + month;
  }

  return year + format + month + format + date;
};
