import { Diary } from '../../types/diaries';
import { dateFormatter } from '../../utils/date-formatter';
import EmotionCard from '../../components/EmotionCard';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, diaryDate, emotionId, content }: Diary) => {
  const nav = useNavigate();

  const handlePageMoveToDetails = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      nav(`./details/${id}`);
    }
  };

  const handlePageMoveToEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    nav(`./edit/${id}`);
  };

  return (
    <div className='diary-item-container' onClick={handlePageMoveToDetails}>
      <EmotionCard emotionId={emotionId} />
      <div className='contents'>
        <p className='date'>{dateFormatter(diaryDate, '-')}</p>
        <p className='content'>{content}</p>
      </div>
      <Button textContent='수정하기' onClick={handlePageMoveToEdit} />
    </div>
  );
};

export default DiaryItem;
