import './Dropdown.css';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ onChange }: Props) => {
  return (
    <div className='dropdown-container'>
      <select onChange={onChange}>
        <option value='latest'>최근 순</option>
        <option value='oldest'>오래된 순</option>
      </select>
    </div>
  );
};

export default Dropdown;
