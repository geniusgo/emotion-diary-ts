import './EmotionCard.css';
import { EMOTION_NAME } from '../constants/emotion-name';

interface Props {
  emotionId: string;
  type?: string;
}

const EmotionCard = ({ emotionId, type }: Props) => {
  return (
    <div
      className={`emotion-card${emotionId ? ` emotion${emotionId}` : ''}${type ? ' ' + type : ''}`}
    >
      <img src={`../src/assets/emotion${emotionId}.png`} />
      <p>{EMOTION_NAME[emotionId]}</p>
    </div>
  );
};

export default EmotionCard;
