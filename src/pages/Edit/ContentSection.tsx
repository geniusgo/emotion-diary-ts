import Textarea from '../../components/Textarea';

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const ContentSection = ({ content, setContent }: Props) => {
  const handleChange = (text: string) => {
    setContent(text);
  };
  return (
    <div className='content-section'>
      <h3>📝 오늘의 일기</h3>
      <Textarea content={content} readOnly={false} onBlur={handleChange}></Textarea>
    </div>
  );
};

export default ContentSection;
