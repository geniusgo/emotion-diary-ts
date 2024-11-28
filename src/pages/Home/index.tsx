import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Controller from './Controller';
import DiaryList from './DiaryList';
import { useState } from 'react';

const Home = () => {
  const [term, setTerm] = useState(new Date());

  const handleClickLastMonth = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTerm(new Date(term.getFullYear(), term.getMonth() - 1, 1, 0, 0, 0, 0));
  };

  const handleClickNextMonth = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTerm(new Date(term.getFullYear(), term.getMonth() + 1, 1, 0, 0, 0, 0));
  };

  return (
    <div className='home-container'>
      <Header
        leftBtn={<Button textContent='<' onClick={handleClickLastMonth} />}
        headerTitle={`${term.getFullYear()}년 ${term.getMonth() + 1}월`}
        rightBtn={<Button textContent='>' onClick={handleClickNextMonth} />}
      />
      <Controller />
      <DiaryList term={term} />
    </div>
  );
};

export default Home;
