import React from "react";
import { Formik } from "formik";
import "./style.css";

const Registration = () => {
  return (
    <div className="Registraion">
      <div>
        <h2>Sign-Up</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            conformPassword: ""
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Required";
            } else if (values.name.length < 3) {
              errors.name = "Username cannot be less than 3 characters";
            } else if (values.name.length > 12) {
              errors.name = "Username cannot be more than 12 characters";
            }

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

            if (values.password !== values.conformPassword) {
              errors.conformPassword = "Passwords does not match";
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
                <label htmlFor="name">UserName</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && <p>{errors.name}</p>}
              </div>
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

              <div>
                <label htmlFor="conformPassword">conform - Password</label>
                <input
                  type="password"
                  name="conformPassword"
                  id="conformPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.conformPassword}
                />
                {errors.conformPassword && touched.conformPassword && (
                  <p>{errors.conformPassword}</p>
                )}
              </div>

              <button type="submit">Sign-Up</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
