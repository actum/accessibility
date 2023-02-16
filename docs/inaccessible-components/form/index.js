import React, { useMemo, useState } from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"
import { useForm } from "./useForm";
import classNames from "classnames";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  message: ""
};

const validateEmail = (email) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export default function Form() {
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [wasValidated, setWasValidated] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const fullNameInvalid = useMemo(
    () => wasValidated && !formValid && !values.fullName,
    [wasValidated, formValid, values.fullName]
  );

  const emailInvalid = useMemo(
    () => wasValidated && !formValid && !validateEmail(values.email),
    [wasValidated, formValid, values.email]
  );

  const messageInvalid = useMemo(
    () => wasValidated && !formValid && !values.message,
    [wasValidated, formValid, values.message]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setWasValidated(false);

    if (values.fullName && validateEmail(values.email) && values.message) {
      setFormValid(true);
      setValues(initialValues);
    } else {
      setFormValid(false);
    }

    setWasValidated(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div>
        <h1>Drop us a message!</h1>
        {wasValidated && formValid && (
          <div className="message message--success">
            We have saved your message, thank you!
          </div>
        )}
        {wasValidated && !formValid && (
          <div className="message message--error">
            The form contains one or more errors.
          </div>
        )}
        <form className="form" noValidate>
          <div className="form__row">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name *"
              className={classNames({
                form__control: true,
                "form__control--invalid": fullNameInvalid
              })}
              aria-invalid={fullNameInvalid}
              required
              value={values.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form__row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              className={classNames({
                form__control: true,
                "form__control--invalid": emailInvalid
              })}
              aria-invalid={emailInvalid}
              required
              value={values.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form__row">
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="form__control"
              placeholder="+420123456789"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <span className="form__help">
              You can enter the phone number with or without the country code and space characters.
            </span>
          </div>

          <div className="form__row">
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Anything you would like to share with us... *"
              className={classNames({
                form__control: true,
                "form__control--invalid": messageInvalid
              })}
              aria-invalid={messageInvalid}
              required
              value={values.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="button" className="form__btn" onClick={handleSubmit}>
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
