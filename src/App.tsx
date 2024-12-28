import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useReducer, useRef } from 'react';
import { Diary, DiaryDispatch } from './types/diaries.ts';
import Home from './pages/Home/index.tsx';
import Edit from './pages/Edit/index.tsx';
import Details from './pages/Details/index.tsx';
import NotFound from './pages/NotFound/index.tsx';
import { getDiaries } from './api/diariesRequest.ts';

type Action =
  | {
      type: 'INIT';
      data: Diary[];
    }
  | {
      type: 'CREATE';
      diary: Diary;
    }
  | { type: 'DELETE'; id: string }
  | { type: 'UPDATE'; diary: Diary };

const diariesReducer = (state: Diary[], action: Action) => {
  switch (action.type) {
    case 'INIT':
      return [...action.data];
    case 'CREATE':
      return [...state, action.diary];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE':
      return state.map((todo) => (todo.id === action.diary.id ? action.diary : todo));
    default:
      throw new Error('unknown action');
  }
};

export const DiariesStateContext = createContext<Diary[] | null>(null);
export const DiariesDispatchContext = createContext<DiaryDispatch | null>(null);

function App() {
  const [diaries, dispatch] = useReducer(diariesReducer, []);

  useEffect(() => {
    let isMounted = true;

    const dataFetch = async () => {
      if (isMounted) {
        const diaries = await getDiaries();
        dispatch({
          type: 'INIT',
          data: diaries.map((diary: Diary) => {
            return { ...diary, diaryDate: new Date(diary.diaryDate) };
          }),
        });
      }
    };

    dataFetch();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDiaryCreate = (diary: Diary) => {
    dispatch({
      type: 'CREATE',
      diary,
    });
  };
  const handleDiaryDelete = (id: string) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
  };
  const handleDiaryUpdate = (diary: Diary) => {
    dispatch({
      type: 'UPDATE',
      diary,
    });
  };

  return (
    <DiariesStateContext.Provider value={diaries}>
      <DiariesDispatchContext.Provider
        value={{ handleDiaryCreate, handleDiaryDelete, handleDiaryUpdate }}
      >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/new' element={<Edit />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DiariesDispatchContext.Provider>
    </DiariesStateContext.Provider>
  );
}

export default App;
