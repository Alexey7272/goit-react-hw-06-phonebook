import { getContacts } from "redux/contact/selectors";
import { useSelector } from "react-redux";
import ContactEditor from './ContactEditor';
import ContactList from "./ContactList";
import Filter from "./Filter";
import styles from "./PhoneBook.module.css";


export default function App () {

  const filter = useSelector(state => state.filter)
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
      <div>
        <h1 className={styles.Contacts__title}>Phonebook</h1>
        <ContactEditor/>
        <h2 className={styles.Contacts__title}>Contacts</h2>
        <Filter filterQueue={getFilteredContacts}/>
        <ContactList />
      </div>
  );
};
