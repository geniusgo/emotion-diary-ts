import DiaryItem from './DiaryItem';
import useDiaries from '../../hooks/useDiaries';
import { Diary } from '../../types/diaries';

interface Props {
  term: Date;
}

const termChecker = ({ diary, term }: { diary: Diary; term: Date }) => {
  const MIN_DATE = new Date(term.getFullYear(), term.getMonth(), 1, 0, 0, 0, 0);
  const MAX_DATE = new Date(term.getFullYear(), term.getMonth() + 1, 1, 0, 0, 0, 0);

  return diary.diaryDate >= MIN_DATE && diary.diaryDate < MAX_DATE;
};

const DiaryList = ({ term }: Props) => {
  const diaries = useDiaries(); // null 타입을 제거한 Diary[] 타입 값을 받아오는 커스텀 훅
  const filteredDiaries = diaries.filter((diary) => termChecker({ diary, term }));

  return (
    <div className='diary-list-container'>
      {filteredDiaries.map((diary) => (
        <DiaryItem key={diary.id} {...diary} />
      ))}
    </div>
  );
};

export default DiaryList;
