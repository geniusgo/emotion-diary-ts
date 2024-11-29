import './index.css';
import useDiaries from '../../hooks/useDiaries';
import useDiary from '../../hooks/useDiary';
import { dateFormatter } from '../../utils/date-formatter';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import EmotionSection from './EmotionSection';
import ContentSection from './ContentSection';

const Details = () => {
  const params = useParams();
  const diary = useDiary(params.id);

  return (
    <div className='details-container'>
      <Header
        leftBtn={<Button textContent='< 뒤로 가기' />}
        headerTitle={`${dateFormatter(diary.diaryDate, '-')} 기록`}
        rightBtn={<Button textContent='수정하기' />}
      />
      <EmotionSection />
      <ContentSection />
    </div>
  );
};

export default Details;
