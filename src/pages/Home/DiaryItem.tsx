import { Diary } from '../../types/diaries';
import EmotionCard from '../../components/EmotionCard';

const DiaryItem = ({ id, diaryDate, emotionId, content }: Diary) => {
  return (
    <div className='diary-item-container'>
      <EmotionCard emotionId={emotionId} />
    </div>
  );
};

export default DiaryItem;
