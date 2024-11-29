import { Diary } from '../../types/diaries';
import { dateFormatter } from '../../utils/date-formatter';
import EmotionCard from '../../components/EmotionCard';
import Button from '../../components/Button';

const DiaryItem = ({ diaryDate, emotionId, content }: Diary) => {
  return (
    <div className='diary-item-container'>
      <EmotionCard emotionId={emotionId} />
      <div className='contents'>
        <p className='date'>{dateFormatter(diaryDate, '-')}</p>
        <p className='content'>{content}</p>
      </div>
      <Button textContent='수정하기' />
    </div>
  );
};

export default DiaryItem;
