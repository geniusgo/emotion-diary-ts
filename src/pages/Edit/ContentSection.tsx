import Textarea from '../../components/Textarea';

const ContentSection = () => {
  return (
    <div className='content-section'>
      <h3>📝 오늘의 일기</h3>
      <Textarea content={'hi'}></Textarea>
    </div>
  );
};

export default ContentSection;
