import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createContext, useReducer } from 'react';
import { mockData } from './utils/mock-data.ts';
import { Diary, DiaryDispatch } from './types/diaries.ts';
import Home from './pages/Home/index.tsx';
import Edit from './pages/Edit/index.tsx';
import Details from './pages/Details/index.tsx';
import NotFound from './pages/NotFound/index.tsx';

type Action =
  | {
      type: 'CREATE';
      diary: Diary;
    }
  | { type: 'DELETE'; id: number }
  | { type: 'UPDATE'; diary: Diary };

const diariesReducer = (state: Diary[], action: Action) => {
  switch (action.type) {
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

export const DiaryStateContext = createContext<Diary[] | null>(null);
export const DiaryDispatchContext = createContext<DiaryDispatch | null>(null);

function App() {
  const [diaries, dispatch] = useReducer(diariesReducer, mockData);

  const handleDiaryCreate = () => {};
  const handleDiaryDelete = () => {};
  const handleDiaryUpdate = () => {};

  return (
    <DiaryStateContext.Provider value={diaries}>
      <DiaryDispatchContext.Provider
        value={{ handleDiaryCreate, handleDiaryDelete, handleDiaryUpdate }}
      >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/new' element={<Edit />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
