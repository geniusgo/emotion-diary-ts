import './Dropdown.css';

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
      <select value='latest'>
        <option value='latest'>최근 순</option>
        <option value='oldest'>오래된 순</option>
      </select>
    </div>
  );
};

export default Dropdown;
