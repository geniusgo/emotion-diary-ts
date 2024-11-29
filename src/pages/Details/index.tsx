import './index.css';
import useDiary from '../../hooks/useDiary';
import { dateFormatter } from '../../utils/date-formatter';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import EmotionSection from './EmotionSection';
import ContentSection from './ContentSection';
import { Diary } from '../../types/diaries';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const nav = useNavigate();
  const diary = useDiary(params.id) as Diary;

  const handlePageMoveToHome = () => {
    nav('/');
  };

  const handlePageMoveToEdit = () => {
    nav(`/edit/${params.id}`);
  };

  return (
    <div className='details-container'>
      <Header
        leftBtn={<Button textContent='< 뒤로 가기' onClick={handlePageMoveToHome} />}
        headerTitle={`${dateFormatter(diary.diaryDate, '-')} 기록`}
        rightBtn={<Button textContent='수정하기' onClick={handlePageMoveToEdit} />}
      />
      <EmotionSection />
      <ContentSection />
    </div>
  );
};

export default Details;
