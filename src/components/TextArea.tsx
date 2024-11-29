import { useState } from 'react';
import './Textarea.css';

interface content {
  content: string;
  readOnly: boolean;
  onBlur?: (text: string) => void;
}

const Textarea = ({ content, readOnly, onBlur }: content) => {
  const [text, setText] = useState(content);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleContentChange = () => {
    if (onBlur !== undefined) {
      onBlur(text);
    }
  };

  return (
    <div className='textarea-container'>
      <textarea
        name='diary-content'
        value={text}
        readOnly={readOnly}
        onChange={handleTextChange}
        onBlur={handleContentChange}
      />
    </div>
  );
};

export default Textarea;
