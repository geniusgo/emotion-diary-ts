import useDiary from '../../hooks/useDiary';
import { useParams } from 'react-router-dom';
import Textarea from '../../components/TextArea';

const ContentSection = () => {
  const params = useParams();
  const diary = useDiary(params.id);

  return (
    <div className='content-container'>
      <h3>오늘의 일기</h3>
      <Textarea content={diary.content} />
    </div>
  );
};

export default ContentSection;
