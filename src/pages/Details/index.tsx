import './index.css';
import useDiaries from '../../hooks/useDiaries';
import { dateFormatter } from '../../utils/date-formatter';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import EmotionCard from '../../components/EmotionCard';

const Details = () => {
  const diaries = useDiaries();
  const params = useParams();
  const diary = diaries.filter((item) => item.id === Number(params.id))[0];

  return (
    <div className='details-container'>
      <Header
        leftBtn={<Button textContent='< 뒤로 가기' />}
        headerTitle={`${dateFormatter(diary.diaryDate, '-')} 기록`}
        rightBtn={<Button textContent='수정하기' />}
      />
      <div className='emotion-container'>
        <h3>오늘의 감정</h3>
        <EmotionCard emotionId={diary.emotionId} />
      </div>
    </div>
  );
};

export default Details;
