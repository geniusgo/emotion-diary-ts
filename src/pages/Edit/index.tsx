import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import DateSection from './DateSection';
import EmotionSection from './EmotionSection';
import ContentSection from './ContentSection';
import Footer from './Footer';
import useDiary from '../../hooks/useDiary';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import { DiariesDispatchContext } from '../../App';

const Edit = () => {
  const dispatch = useContext(DiariesDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  const diary = useDiary(params.id || '');
  const [diaryDate, setDiaryDate] = useState(diary ? diary.diaryDate : new Date());
  const [emotionId, setEmotionId] = useState(diary ? diary.emotionId : '');
  const [content, setContent] = useState(diary ? diary.content : '');
  const id = useRef(10);

  if (dispatch === null) {
    throw new Error('diary dispatch 함수를 확인하세요');
  }

  const handleDiaryCreate = () => {
    if (window.confirm('작성하신 정보로 일기를 생성합니다')) {
      // 상태 업데이트
      dispatch.handleDiaryCreate({
        id: String(id.current++),
        diaryDate,
        emotionId,
        content,
      });

      // 홈 화면으로 이동
      nav('/', { replace: true });
    }
  };

  const handleDiaryUpdate = () => {
    // 상태 업데이트
    if (window.confirm('작성하신 정보로 일기를 수정할까요?')) {
      dispatch.handleDiaryUpdate({
        id: params.id as string,
        diaryDate,
        emotionId,
        content,
      });
    }

    // 홈 화면으로 이동
    nav('/', { replace: true });
  };

  const handleDiaryDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요?')) {
      dispatch.handleDiaryDelete(params.id as string);
    }

    nav('/', { replace: true });
  };

  const handlePageMoveToHome = () => {
    nav('/', { replace: true });
  };

  return (
    <div className='edit-container'>
      <Header
        leftBtn={<Button textContent='< 뒤로 가기' onClick={handlePageMoveToHome} />}
        headerTitle={diary ? '일기 수정하기' : '새 일기 쓰기'}
        rightBtn={
          diary ? (
            <Button textContent='삭제하기' type='negative' onClick={handleDiaryDelete} />
          ) : (
            <Button textContent='' type='none' />
          )
        }
      />
      <DateSection
        date={diary === undefined ? new Date() : diary.diaryDate}
        setDiaryDate={setDiaryDate}
      />
      <EmotionSection emotionId={emotionId} setEmotionId={setEmotionId} />
      <ContentSection content={content} setContent={setContent} />
      <Footer
        buttonText={diary ? '수정하기' : '만들기'}
        onClickCreate={handleDiaryCreate}
        onClickUpdate={handleDiaryUpdate}
        type={diary ? 'edit' : 'new'}
      />
    </div>
  );
};

export default Edit;
