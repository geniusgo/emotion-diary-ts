import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import Edit from './pages/Edit/index.tsx';
import Details from './pages/Details/index.tsx';
import NotFound from './pages/NotFound/index.tsx';

function App() {
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
