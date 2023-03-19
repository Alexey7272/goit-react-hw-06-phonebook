import ContactEditor from './ContactEditor';
import ContactList from "./ContactList";
import Filter from "./Filter";
import styles from "./PhoneBook.module.css";


export default function App () {

  return (
      <div>
        <h1 className={styles.Contacts__title}>Phonebook</h1>
        <ContactEditor/>
        <h2 className={styles.Contacts__title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
};
