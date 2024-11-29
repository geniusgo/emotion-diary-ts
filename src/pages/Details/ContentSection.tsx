import useDiary from '../../hooks/useDiary';
import { useParams } from 'react-router-dom';

const ContentSection = () => {
  const params = useParams();
  const diary = useDiary(params.id);

  return (
    <div className='content-container'>
      <h3>오늘의 일기</h3>
      <div className='diary-content-container'>
        <textarea name='diary-content' value={diary.content} readOnly />
      </div>
    </div>
  );
};

export default ContentSection;
