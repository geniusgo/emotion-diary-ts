import useDiaries from './useDiaries';

// 특정 id의 다이어리 목록 받아오는 Hook
const useDiary = (id: string | undefined) => {
  if (id === undefined) {
    throw new Error('id의 타입이 잘못됐습니다');
  }

  const diaries = useDiaries();
  return diaries.filter((diary) => diary.id === Number(id))[0];
};

export default useDiary;
