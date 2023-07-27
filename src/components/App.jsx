import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <Title title={'Phonebook'} type={'h1'}></Title>
      <ContactForm />
      <Title title={'Contacts'} type={'h2'}></Title>
      <Filter />
      <ContactList />
    </div>
  );
};
