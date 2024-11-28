import './Button.css';

interface Props {
  textContent: string;
  type?: string;
}

const Button = ({ textContent, type }: Props) => {
  return (
    <div className={`button-container${type ? ' ' + type : ''}`}>
      <button>{textContent}</button>
    </div>
  );
};

export default Button;
