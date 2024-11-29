import EmotionCard from '../../components/EmotionCard';
import useDiaries from '../../hooks/useDiaries';
import { useParams } from 'react-router-dom';

const EmotionSection = () => {
  const diaries = useDiaries();
  const params = useParams();
  const diary = diaries.filter((item) => item.id === Number(params.id))[0];

  return (
    <div className='emotion-container'>
      <h3>오늘의 감정</h3>
      <EmotionCard emotionId={diary.emotionId} />
    </div>
  );
};

export default EmotionSection;
