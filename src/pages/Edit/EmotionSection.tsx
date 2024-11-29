import EmotionCard from '../../components/EmotionCard';
import { EMOTION_NAME } from '../../constants/emotion-name';

const EmotionSection = () => {
  return (
    <div className='emotion-container'>
      <h3>😀 오늘의 감정</h3>
      <div className='emotion-card-container'>
        {[...Object.keys(EMOTION_NAME)].map((key) => (
          <EmotionCard emotionId={key} type='gray' />
        ))}
      </div>
    </div>
  );
};

export default EmotionSection;
