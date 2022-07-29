import "./style.css";
import React from "react";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <div className="login">
      <div>
        <h2>Please Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length <= 6) {
              errors.password = "Password minimun length 6 ";
            } else if (values.password.length >= 15) {
              errors.password = "password maximum length 15";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <p>{errors.password}</p>
                )}
              </div>
              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginForm;
