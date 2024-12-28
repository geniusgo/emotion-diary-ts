/** 타입 정의 **/
export interface Diary {
  id?: string;
  diaryDate: Date;
  content: string;
  emotionId: string;
  emotionUrl?: string;
  _id?: string;
}

export interface DiaryDispatch {
  handleDiaryCreate: (diary: Diary) => void;
  handleDiaryDelete: (id: string) => void;
  handleDiaryUpdate: (diary: Diary) => void;
}
