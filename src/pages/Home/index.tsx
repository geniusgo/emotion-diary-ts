import Header from '../../components/Header';
import Button from '../../components/Button';

const Home = () => {
  return (
    <div className='home-container'>
      <Header
        leftBtn={<Button textContent='<' />}
        headerTitle={`${new Date().getFullYear()}년 ${new Date().getMonth()}월`}
        rightBtn={<Button textContent='>' />}
      />
    </div>
  );
};

export default Home;
