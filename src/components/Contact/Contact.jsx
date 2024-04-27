import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import EditContactForm from "../EditContactForm/EditContactForm";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete the contact?")) {
      dispatch(deleteContact(contact.id));
    } else {
      console.log("no");
    }
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
      <button className={css.btn} onClick={handleEdit}>
        Edit
      </button>
      {isEditing && (
        <EditContactForm
          contact={{
            name: contact.name,
            number: contact.number,
            id: contact.id,
          }}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </>
  );
};

export default Contact;
