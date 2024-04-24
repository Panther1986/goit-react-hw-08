import Contact from "../Contact/Contact";
import React, { useEffect } from "react";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactListMain}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
