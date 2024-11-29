import useDiary from '../../hooks/useDiary';
import { useParams } from 'react-router-dom';
import Textarea from '../../components/Textarea';
import { Diary } from '../../types/diaries';

const ContentSection = () => {
  const params = useParams();
  const diary = useDiary(params.id) as Diary;

  return (
    <div className='content-container'>
      <h3>오늘의 일기</h3>
      <Textarea content={diary.content} readOnly={true} />
    </div>
  );
};

export default ContentSection;
