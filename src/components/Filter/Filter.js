import { filterContact } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Form className="d-flex">
      <Form.Control
        className="me-2 w-25"
        aria-label="Search"
        type="text"
        name="filter"
        onChange={event => dispatch(filterContact(event.target.value))}
        value={filter}
        placeholder="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    // <form>
    //   <label>
    //     Find contacts by name
    //     <input
    //       type="text"
    //       name="filter"
    //       onChange={event => dispatch(filterContact(event.target.value))}
    //       value={filter}
    //       placeholder="Search"
    //     />
    //   </label>
    // </form>
  );
};
export default Filter;
