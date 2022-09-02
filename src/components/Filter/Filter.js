import { filterContact } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={event => dispatch(filterContact(event.target.value))}
          value={filter}
          placeholder="Search"
        />
      </label>
    </form>
  );
};
export default Filter;
