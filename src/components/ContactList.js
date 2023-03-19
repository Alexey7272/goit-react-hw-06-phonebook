import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contact/selectors';
import { removeContacts } from 'redux/contact/actionCreators';
import styles from "./PhoneBook.module.css";

const ContactList = ({ onRemoveContact }) =>{
    const contacts = useSelector(getContacts)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()

    const getFilteredContacts = () => {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter)
        );
    }

    return (
        <ul className={styles.Contacts__list}>
            {getFilteredContacts().map(( {id, name, number} ) => ( 
                <li key={id} className={styles.Contacts__item}>
                    {name}: {number}
    
                    <button 
                      onClick={() => dispatch(removeContacts(id))}
                      className={styles.Contacts__button}
                      >
                      Delete
                    </button> 
                </li>
            ))}
        </ul>
    )
};


export default ContactList;
