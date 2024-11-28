import DiaryItem from './DiaryItem';
import useDiaries from '../../hooks/useDiaries';

const DiaryList = () => {
  const diaries = useDiaries(); // null 타입을 제거한 Diary[] 타입 값을 받아오는 커스텀 훅

  return (
    <div className='diary-list-container'>
      {diaries.map((diary) => (
        <DiaryItem key={diary.id} {...diary} />
      ))}
    </div>
  );
};

export default DiaryList;
