import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.includes(filters));
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts().map(({ id, name, phone }) => {
          return <ContactItem id={id} name={name} phone={phone} key={id} />;
        })}
      </ul>
    </div>
  );
};
