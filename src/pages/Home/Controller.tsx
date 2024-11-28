import './Controller.css';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';

const Controller = () => {
  return (
    <div className='controller-container'>
      <Dropdown />
      <Button textContent='새 일기 만들기' type='positive' />
    </div>
  );
};

export default Controller;
