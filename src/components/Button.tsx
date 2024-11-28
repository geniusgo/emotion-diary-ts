import './Button.css';

interface Props {
  textContent: string;
  type?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void /** 필수지만, 개발 편의 상 일단 옵셔널로 둠 **/;
}

const Button = ({ textContent, type, onClick }: Props) => {
  return (
    <div className={`button-container`}>
      <button className={`${type ? type : ''}`} onClick={onClick}>
        {textContent}
      </button>
    </div>
  );
};

export default Button;
