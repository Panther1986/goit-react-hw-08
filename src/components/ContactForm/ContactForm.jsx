import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phoneNumber.trim() === "") {
      toast.error("Name and phone number are required.");
    } else {
      dispatch(addContact({ name, phoneNumber }));
      setName("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={css.fieldForm}
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className={css.fieldForm}
        />
        <button type="submit" className={css.btnForm}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
