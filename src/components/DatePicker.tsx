import './DatePicker.css';
import { dateFormatter } from '../utils/date-formatter';

interface Props {
  date: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({ date, onChange }: Props) => {
  return (
    <div className='date-picker'>
      <input type='date' value={dateFormatter(date, '-')} onChange={onChange} />
    </div>
  );
};

export default DatePicker;
