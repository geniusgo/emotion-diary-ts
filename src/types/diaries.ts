/** 타입 정의 **/
export interface Diary {
  id: number;
  diaryDate: Date;
  content: string;
  emotionId: number;
}

export interface DiaryDispatch {
  handleDiaryCreate: () => void;
  handleDiaryDelete: () => void;
  handleDiaryUpdate: () => void;
}
