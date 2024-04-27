import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./EditContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  usernumber: Yup.string().min(3, "Too Short!").required("Required"),
});

const EditContactForm = ({ contact }) => {
  const dispach = useDispatch();
  const initialValues = {
    username: contact.name,
    usernumber: contact.number,
  };

  console.log(initialValues);
  const handleSubmit = (values, actions) => {
    dispach(
      editContact({
        name: values.username,
        number: values.usernumber,
        id: contact.id,
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
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
