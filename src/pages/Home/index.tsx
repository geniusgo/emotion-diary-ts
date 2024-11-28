import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Controller from './Controller';
import DiaryList from './DiaryList';
import { useState } from 'react';

const Home = () => {
  const [dateFilter, setDateFilter] = useState(new Date());

  const handleClickLastMonth = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setDateFilter(new Date(dateFilter.getFullYear(), dateFilter.getMonth() - 1, 1, 0, 0, 0, 0));
  };

  const handleClickNextMonth = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setDateFilter(new Date(dateFilter.getFullYear(), dateFilter.getMonth() + 1, 1, 0, 0, 0, 0));
  };

  return (
    <div className='home-container'>
      <Header
        leftBtn={<Button textContent='<' onClick={handleClickLastMonth} />}
        headerTitle={`${dateFilter.getFullYear()}년 ${dateFilter.getMonth() + 1}월`}
        rightBtn={<Button textContent='>' onClick={handleClickNextMonth} />}
      />
      <Controller />
      <DiaryList />
    </div>
  );
};

export default Home;
