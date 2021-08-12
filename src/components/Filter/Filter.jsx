import { connect } from 'react-redux';
import { changeFilter } from 'redux/actions';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        name="filter"
        type="text"
        placeholder="Type contact name"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
