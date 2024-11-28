import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Controller from './Controller';
import DiaryList from './DiaryList';

const Home = () => {
  return (
    <div className='home-container'>
      <Header
        leftBtn={<Button textContent='<' />}
        headerTitle={`${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`}
        rightBtn={<Button textContent='>' />}
      />
      <Controller />
      <DiaryList />
    </div>
  );
};

export default Home;
