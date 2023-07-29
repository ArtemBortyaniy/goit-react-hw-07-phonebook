import { useEffect } from 'react';
import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { getContacts, deleteContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.includes(filters));
  };

  const handleDelete = id => {
    return dispatch(deleteContacts(id));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts().map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.item}>
              <p>
                {name}: {phone}
              </p>
              <button
                type="button"
                className={css.buttonDelete}
                onClick={() => handleDelete(id)}
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
