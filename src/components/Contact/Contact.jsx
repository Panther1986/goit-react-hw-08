import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.contactMainConteiner}>
        <p className={css.contacText}>
          <IoPerson /> {contact.name}
        </p>
        <p className={css.contacNumber}>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
