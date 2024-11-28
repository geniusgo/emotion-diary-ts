export const dateFormatter = (diaryDate: Date, format: string) => {
  return (
    diaryDate.getFullYear() + format + (diaryDate.getMonth() + 1) + format + diaryDate.getDate()
  );
};
