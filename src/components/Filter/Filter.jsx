import { onChangeFilter } from 'redux/contactsSlice';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilterValue = useSelector(getFilterValue);

  const onUpdateFilterValue = ({ target: { value } }) => {
    dispatch(onChangeFilter(value));
  };

  return (
    <label>
      Find contacts by name <br />
      <Input
        type="text"
        name="name"
        onChange={onUpdateFilterValue}
        value={stateFilterValue}
        placeholder="Type contact name. . ."
      />
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

export default Filter;
