import axios from 'axios';
import { Diary } from '../types/diaries';

const URL = 'http://localhost:3000/diaries';

export const getDiaries = async () => {
  try {
    const diaries = await axios.get(URL);
    return diaries.data;
  } catch (err) {
    console.error(err);
  }
};

export const postDiary = async (diary: Diary) => {
  try {
    const res = await axios.post(URL, diary);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const putDiary = async (diary: Diary) => {
  try {
    console.log(URL + `/${diary._id}`);
    const res = await axios.put(URL + `/${diary.id}`, {
      emotionId: diary.emotionId,
      content: diary.content,
      diaryDate: diary.diaryDate,
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteDiary = async (id: string) => {
  try {
    const res = await axios.delete(URL + `/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
