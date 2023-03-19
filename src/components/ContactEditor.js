import React, { useState } from "react";
import { getContacts } from "redux/contact/selectors";
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { addContacts } from "redux/contact/slice";
import styles from "./PhoneBook.module.css";
import shortid from "shortid";


export default function ContactEditor ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);

    const id = shortid.generate();
    const dispatch = useDispatch(); 
    
    const resetForm = () => {
        setName('');
        setNumber('');
    };

    const doesContactExist = nameQuery => {
        return contacts.some(
          contact => contact.name.toLowerCase() === nameQuery.toLowerCase()
        );
    };

    const contactChange = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
            break;

            case 'number':
                setNumber(value);
            break;

            default: 
              return;
        };
    };

    const formSubmit = evt => {
        evt.preventDefault();
        if (doesContactExist(name)) {
            alert(`${name} is already in contacts`);
            return;
        };
        resetForm();
        dispatch(addContacts({id, name, number})) 
    }; 

    
    return (
        <form className={styles.AddContact} onSubmit={formSubmit}> 
  
                <label className={styles.AddContact__label}>

                    Name
                    <input
                       name="name"
                       value={name} 
                       onChange={contactChange}  
                       className={styles.AddContact__data}
                    />
                    
                    Number
                    <input
                       type="tel"
                       name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       required
                       value={number} 
                       onChange={contactChange} 
                       className={styles.AddContact__data}
                    />
                </label>

                <button type="submit" className={styles.AddContact__button}>Add contact</button>

        </form>
    );
};
