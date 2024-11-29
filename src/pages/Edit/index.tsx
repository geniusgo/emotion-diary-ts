import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import DateSection from './DateSection';
import EmotionSection from './EmotionSection';
import ContentSection from './ContentSection';
import useDiary from '../../hooks/useDiary';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Diary } from '../../types/diaries';

const Edit = () => {
  const params = useParams();
  const diary = useDiary(params.id || '');
  const [diaryDate, setDiaryDate] = useState(new Date());
  const [emotionId, setEmotionId] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='edit-container'>
      <Header
        leftBtn={<Button textContent='< 뒤로 가기' />}
        headerTitle={`새 일기 쓰기`}
        rightBtn={<Button textContent='' type='none' />}
      />
      <DateSection
        date={diary === undefined ? new Date() : diary.diaryDate}
        setDiaryDate={setDiaryDate}
      />
      <EmotionSection />
      <ContentSection />
    </div>
  );
};

export default Edit;
