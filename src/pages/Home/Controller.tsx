import './Controller.css';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { useState } from 'react';

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const Controller = ({ setSortBy }: Props) => {
  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className='controller-container'>
      <Dropdown onChange={handleSortBy} />
      <Button textContent='새 일기 만들기' type='positive' />
    </div>
  );
};

export default Controller;
