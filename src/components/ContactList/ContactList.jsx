import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts, editContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';
import { useState } from 'react';
import { BtnOpenModal } from 'components/BtnOpenModal/BtnOpenModal';
import { Modal } from 'components/Modal/Modal';

export const ContactList = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.includes(filters));
  };

  const handleDelete = id => {
    return dispatch(deleteContacts(id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const id = form.getAttribute('id-contact');
    dispatch(
      editContacts({
        contactId: id,
        name: form.elements.name.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
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
              <BtnOpenModal onClick={handleToggleModal}>Edit</BtnOpenModal>
              <button
                type="button"
                className={css.buttonDelete}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
              {showModal && (
                <Modal onClose={handleToggleModal}>
                  <form
                    className={css.form}
                    onSubmit={handleSubmit}
                    id-contact={id}
                  >
                    <label className={css.label}>
                      Name
                      <input
                        type="text"
                        name="name"
                        placeholder={name}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                      />
                    </label>
                    <label className={css.label}>
                      Number
                      <input
                        type="tel"
                        name="phone"
                        placeholder={phone}
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.input}
                      />
                    </label>
                    <div className={css.btnContainer}>
                      <button type="submit" className={css.button}>
                        edit contact
                      </button>
                    </div>
                  </form>
                </Modal>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
