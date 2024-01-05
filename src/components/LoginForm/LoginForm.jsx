import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';
import { Input } from "./LoginForm.styled";

const initialValues = {
    login: '',
    password: '',
}

export const LoginForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values, 'values');
        console.log(actions, 'actions');
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label>
                    Login
                    <Input type="text" name="login" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" autoComplete="false" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}