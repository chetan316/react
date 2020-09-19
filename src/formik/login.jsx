import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const LoginWithFormik = () => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={({ setSubmitting }) => {
                alert("submitting...");
                setSubmitting(false);
            }}
            //Normal Validation
            // validate={(values) => {
            //     let errors = {};
            //     if (values.email === '')
            //         errors.email = 'Email is required';
            //     if (values.password === '')
            //         errors.password = 'Password is required';
            //     return errors;
            // }}

            //Yup Validation
            validationSchema={
                yup.object().shape({
                    email: yup.string().required('Email is Needed'),
                    password: yup.string().required('Password is mandatory')
                })
            }
        >
            {() => (
                <Form>
                    <div>
                        <lable htmlFor="email">Email</lable>
                        <Field type="text" name="email"></Field>
                        {/* <ErrorMessage name="email">
                            {error => <span className="errorMessage">{error}</span>}
                        </ErrorMessage> */}
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div>
                        <label htmlfor="password">Password</label>
                        <Field type="password" name="password"></Field>
                        {/* <ErrorMessage name="password">
                            {error => <span>{error}</span>}
                        </ErrorMessage> */}
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}

        </Formik>
    );
}

export default LoginWithFormik;