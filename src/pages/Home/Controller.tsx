import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const Controller = ({ setSortBy }: Props) => {
  const nav = useNavigate();
  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handlePageMoveToNew = (e: React.MouseEvent<HTMLButtonElement>) => {
    nav('./new');
  };

  return (
    <div className='controller-container'>
      <Dropdown onChange={handleSortBy} />
      <Button textContent='새 일기 만들기' type='positive' onClick={handlePageMoveToNew} />
    </div>
  );
};

export default Controller;
