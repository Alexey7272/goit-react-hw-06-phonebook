import {useState, useEffect} from "react";
import ContactEditor from './ContactEditor';
import ContactList from "./ContactList";
import Filter from "./Filter";
import styles from "./PhoneBook.module.css";
import shortid from "shortid";


export default function App () {
  const [ contacts, setContacts ] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [ filter, setFilter ] = useState('');

  useEffect((prevState) => {
    if ( contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    };
  });

  const chekIfContactsExists = queue => {
    return contacts.some(contact => contact.name === queue);
  };

  const addContact = ({ name, number }) => {
    const alreadyContacts = chekIfContactsExists(name)
    
    if(alreadyContacts) {
      alert(`${name} is already in contacts`)
      return
    };
    
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState])
  };
  
  const handleFilter = queue => {
    queue ? setFilter(queue) : setFilter('')
  };

  const showFilteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return filteredContacts;
  };

  const removeContacts = (id) => {
    setContacts(
      contacts.filter(contact => contact.id !== id)
    );
  };


  return (
      <div>
        <h1 className={styles.Contacts__title}>Phonebook</h1>
        <ContactEditor onSubmit={addContact}/>
        <h2 className={styles.Contacts__title}>Contacts</h2>
        <Filter filterQueue={handleFilter}/>
        <ContactList contacts={showFilteredContacts()} onRemoveContact={removeContacts}/>
      </div>
  );
};
