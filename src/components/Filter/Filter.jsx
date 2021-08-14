import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';

// import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        name="filter"
        type="text"
        placeholder="Type contact name"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

// Filter.propTypes = {
// filter: PropTypes.string.isRequired,
// changeFilter: PropTypes.func.isRequired,
// };

export default Filter;
