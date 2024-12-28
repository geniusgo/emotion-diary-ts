import axios from 'axios';

const URL = 'http://localhost:3000/diaries';

export const getDiaries = async () => {
  try {
    const diaries = await axios.get(URL);
    return diaries.data;
  } catch (err) {
    console.error(err);
  }
};
