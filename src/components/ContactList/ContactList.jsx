import css from './ContactsList.module.css';
import { getPhonebook } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deletePhone } from 'redux/features/phonebookSlice/phonebookSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const phonebooks = useSelector(getPhonebook);
  const filter = useSelector(getFilter);

  const handleFilter = () => {
    return phonebooks.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {handleFilter().map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={css.buttonDelete}
                onClick={() => dispatch(deletePhone(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
