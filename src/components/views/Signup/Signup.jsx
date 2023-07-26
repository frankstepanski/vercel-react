import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/*
    Forms can be messy
     - Store each form field value in a useState variable.
     - Store all form fields in one useState varabile (object) => better option.
     - Create onChange handlers and onSubmit handlder.
     - Add validation code as well.

     Formik: https://formik.org/docs/tutorial
        - Manages form state and validation
        - Validation: Supports form and field level validation (sync and async)
                    - Synchronous validation: Validates the form on submit
                    - Asynchronous validation: Validates the form on change
                    - Uses Yup for validation
    

    note: useFormik hook is a HOC that wraps around an existing form (simple forms)
*/

const Signup = () => {
    return (
        <>
        <h1>Signup</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
            }}
           


        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="userName">User Name</label>
                <Field id="userName" name="userName" placeholder="JaneDoe" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
                <ErrorMessage name="email" component="div" />
                <button type="submit">Submit</button>
            </Form>
      </Formik>

        </>
    );
}

export default Signup;