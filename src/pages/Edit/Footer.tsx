import Button from '../../components/Button';

interface Props {
  buttonText: string;
  type: string;
  onClickCreate?: () => void;
  onClickUpdate?: () => void;
}

const Footer = ({ buttonText, type, onClickCreate, onClickUpdate }: Props) => {
  return (
    <div className='footer-container'>
      <Button
        textContent={buttonText}
        type='positive'
        onClick={type === 'new' ? onClickCreate : onClickUpdate}
      />
    </div>
  );
};

export default Footer;
