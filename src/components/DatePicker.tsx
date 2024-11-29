import './DatePicker.css';
import { dateFormatter } from '../utils/date-formatter';
import { useEffect } from 'react';

interface Props {
  date: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({ date, onChange }: Props) => {
  useEffect(() => {
    console.log(date);
  }, []);
  return (
    <div className='date-picker'>
      <input type='date' value={dateFormatter(date, '-')} onChange={onChange} />
    </div>
  );
};

export default DatePicker;
