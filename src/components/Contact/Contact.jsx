import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log("Удаление контакта с ID:", id);
        dispatch(deleteContact(id));
    };

    return (
        <div className={styles.contact}>
            <p><strong>{name}</strong></p>
            <p>{number}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Contact;
