// 전체 다이어리 목록 받아오는 Hook
import { useContext } from 'react';
import { DiariesStateContext } from '../App';

const useDiaries = () => {
  const diaries = useContext(DiariesStateContext);

  if (diaries === null) {
    throw new Error('Context의 Provider를 정의하세요');
  }

  return diaries;
};

export default useDiaries;
