import './Button.css';

interface Props {
  textContent: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
