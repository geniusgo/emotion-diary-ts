import EmotionCard from '../../components/EmotionCard';
import { EMOTION_NAME } from '../../constants/emotion-name';

interface Props {
  emotionId: string;
  setEmotionId: React.Dispatch<React.SetStateAction<string>>;
}

const EmotionSection = ({ emotionId, setEmotionId }: Props) => {
  const handleEmotionClicked = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const condition =
      e.target instanceof HTMLImageElement || e.target instanceof HTMLParagraphElement;

    const newEmotionId = [...Array.from(e.currentTarget.children)].findIndex((elem) =>
      condition ? elem === target.parentNode : elem === e.target
    );

    setEmotionId(String(newEmotionId + 1));
  };

  return (
    <div className='emotion-container'>
      <h3>😀 오늘의 감정</h3>
      <div className='emotion-card-container' onClick={handleEmotionClicked}>
        {[...Object.keys(EMOTION_NAME)].map((key) => (
          <EmotionCard emotionId={key} type={emotionId === key ? '' : 'gray'} />
        ))}
      </div>
    </div>
  );
};

export default EmotionSection;
