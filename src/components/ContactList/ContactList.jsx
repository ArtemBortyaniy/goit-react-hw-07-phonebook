import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const a = useSelector(state => state.contacts.isLoading);
  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.includes(filters));
  };

  const handleDelete = id => {
    console.log(a);
    return dispatch(deleteContacts(id));
  };

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
