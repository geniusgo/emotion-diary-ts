import './Textarea.css';

interface content {
  content: string;
}

const Textarea = ({ content }: content) => {
  return (
    <div className='textarea-container'>
      <textarea name='diary-content' value={content} readOnly />
    </div>
  );
};

export default Textarea;
