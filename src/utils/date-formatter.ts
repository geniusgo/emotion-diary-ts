export const dateFormatter = (diaryDate: Date, format: string) => {
  return diaryDate.getFullYear() + format + diaryDate.getMonth() + format + diaryDate.getDate();
};
