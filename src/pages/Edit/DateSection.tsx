import DatePicker from '../../components/DatePicker';
interface Props {
  date: Date;
  setDiaryDate: React.Dispatch<React.SetStateAction<Date>>;
}
const DateSection = ({ date, setDiaryDate }: Props) => {
  const handleDiaryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiaryDate(new Date(new Date(e.target.value)));
  };

  return (
    <div className='date-container'>
      <h3>📆 오늘의 날짜</h3>
      <DatePicker date={date} onChange={handleDiaryDate} />
    </div>
  );
};

export default DateSection;
