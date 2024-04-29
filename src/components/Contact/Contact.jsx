import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import EditContactForm from "../EditContactForm/EditContactForm";
import React, { useState } from "react";
import Modal from "react-modal";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete the contact?")) {
      dispatch(deleteContact(contact.id));
    } else {
      console.log("no");
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
      <div>
        <button className={css.btn} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.btn} onClick={openModal}>
          Edit
        </button>
      </div>

      <Modal
        appElement={document.getElementById("root")}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className={css.btnClose} onClick={closeModal}>
          Close
        </button>
        <EditContactForm
          contact={{
            name: contact.name,
            number: contact.number,
            id: contact.id,
          }}
        />
      </Modal>
    </>
  );
};

export default Contact;
