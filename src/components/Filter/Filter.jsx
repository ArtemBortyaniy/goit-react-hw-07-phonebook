import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/features/filtersSlice/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilter = e => {
    const newFilter = e.target.value;
    dispatch(setStatusFilter(newFilter));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          required
          className={css.input}
          onChange={setFilter}
        />
      </label>
    </div>
  );
};
