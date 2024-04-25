import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </div>
  );
}
