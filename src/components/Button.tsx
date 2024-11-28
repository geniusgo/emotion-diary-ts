import './Button.css';

interface Props {
  textContent: string;
  type?: string;
}

const Button = ({ textContent, type }: Props) => {
  return (
    <div className={`button-container`}>
      <button className={`${type ? type : ''}`}>{textContent}</button>
    </div>
  );
};

export default Button;
