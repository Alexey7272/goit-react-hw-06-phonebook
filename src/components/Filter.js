import { useDispatch } from "react-redux";
import { addFilter as searchContacts } from "redux/filter/slice";
import shortid from "shortid";
import PropTypes from 'prop-types'
import styles from "./PhoneBook.module.css";

const Filter = ({ filterQueue }) => {
    const filterId = shortid.generate();
    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target;

        filterQueue(value.trim().toLowerCase());
        dispatch(searchContacts(value.trim().toLowerCase()));
    };

    return (
        <div>
            <p className={styles.Filter__title}> Find contacts by name </p>

            <input
            type="text"
            name="filter"
            id={filterId}
            onChange={handleChange}
            className={styles.Filter__label}
            >  
            </input>
        </div>
    );
};

Filter.propTypes = {
    filterQueue: PropTypes.func.isRequired,
};


export default Filter;
