import './Header.css';

interface Props {
  leftBtn: JSX.Element;
  headerTitle: string;
  rightBtn: JSX.Element;
}

const Header = ({ leftBtn, headerTitle, rightBtn }: Props) => {
  return (
    <div className='header-container'>
      {leftBtn}
      <div className='header-title-container'>
        <h3>{headerTitle}</h3>
      </div>
      {rightBtn}
    </div>
  );
};

export default Header;
