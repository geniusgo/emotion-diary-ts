import { Diary } from '../../types/diaries';

const DiaryItem = ({ id, diaryDate, emotionId, content }: Diary) => {
  return <div className='diary-item-container'>{`${id} ${diaryDate} ${emotionId} ${content}`}</div>;
};

export default DiaryItem;
