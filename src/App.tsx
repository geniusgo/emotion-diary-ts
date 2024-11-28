import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import Edit from './pages/Edit/index.tsx';
import Details from './pages/Details/index.tsx';
import NotFound from './pages/NotFound/index.tsx';
import { useReducer } from 'react';

/** 타입 정의 **/
interface Diary {
  id: number;
  diaryDate: Date;
  content: string;
  emotionId: number;
}

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

function App() {
  const [diaries, dispatch] = useReducer(diariesReducer, []);

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
      <Route path='/new' element={<Edit />}></Route>
      <Route path='/edit/:id' element={<Edit />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
