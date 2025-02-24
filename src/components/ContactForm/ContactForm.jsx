import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        dispatch(addContact({ name: form.name.value, number: form.number.value }));
        form.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type='text' name='name' required />
            <input type='text' name='number' required />
            <button type='submit'>Add Contact</button>
        </form>
    );
}

export default ContactForm;
