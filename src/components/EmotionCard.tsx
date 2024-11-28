import './EmotionCard.css';
import { EMOTION_NAME } from '../constants/emotion-name';

interface Props {
  emotionId: string;
}

const EmotionCard = ({ emotionId }: Props) => {
  return (
    <div className={`emotion-card${emotionId ? ` emotion${emotionId}` : ''}`}>
      <img src={`../src/assets/emotion${emotionId}.png`} />
      <p>{EMOTION_NAME[emotionId]}</p>
    </div>
  );
};

export default EmotionCard;
