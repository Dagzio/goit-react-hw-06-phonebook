import ContactForm from '../Form/ContactForm';
import Container from './App.styled';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { deleteContact, onChangeFilter } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';


const App = () => {
    const stateFilterValue = useSelector(getFilterValue);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contactList')) ?? [];
  // });
  // const [filterValue, setFilterValue] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contactList');
  //   if (savedContacts) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contactList', JSON.stringify([...contacts]));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const duplicateName = contacts.find(contact => contact.name === name);
  //   if (duplicateName) {
  //     alert(duplicateName.name + ' is already in your contacts');
  //     return;
  //   }
  //   setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  // };

  // const deleteContact = id => {
  //   const filterValueId = contacts.filter(contact => contact.id !== id);
  //   setContacts([...filterValueId]);
  // };

  // const onChangeFilter = ({ target: { value } }) => {
  //   setFilterValue(value);
  // };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter onChange={onChangeFilter} value={stateFilterValue} />
        <Contacts
          onClick={deleteContact}
          filterValue={stateFilterValue}
        />
      </Section>
    </Container>
  );
};
export default App;
