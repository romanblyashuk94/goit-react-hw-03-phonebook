import s from './Filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ filterValue, handleFilter }) => {
  return (
    <div className={s.filter}>
      <h3 className={s.title}>Find Contact by name</h3>
      <input
        type="text"
        className={s.formInput}
        value={filterValue}
        onChange={e => handleFilter(e.currentTarget.value)}
      />
    </div>
  );
};

Filter.prototype = {
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
