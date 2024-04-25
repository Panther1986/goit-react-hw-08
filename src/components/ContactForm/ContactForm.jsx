import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  usernumber: Yup.string().min(3, "Too Short!").required("Required"),
});

const initialValues = {
  username: "",
  usernumber: "",
};

const ContactForm = () => {
  const dispach = useDispatch();

  const handleSubmit = (values, actions) => {
    dispach(
      addContact({
        name: values.username,
        number: values.usernumber,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.labelContainer}>
          <label className={css.labelForm}>Name</label>
          <Field className={css.fieldForm} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.labelContainer}>
          <label className={css.labelForm}>Number</label>
          <Field className={css.fieldForm} type="number" name="usernumber" />
          <ErrorMessage
            className={css.error}
            name="usernumber"
            component="span"
          />
        </div>

        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
