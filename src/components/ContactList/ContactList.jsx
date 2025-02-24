import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <div className={styles.list}>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} />
            ))}
        </div>
    );
}

export default ContactList;
