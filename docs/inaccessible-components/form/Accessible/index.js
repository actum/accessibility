import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "./useForm";
import classNames from "classnames";
import styles from "!!raw-loader!sass-loader!./index.scss"

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

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") return true

  return phoneNumber.match(
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  )
}
export default function Form() {
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [wasValidated, setWasValidated] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const formRef = useRef(null);
  const errorMessageRef = useRef(null);
  const successMessageRef = useRef(null);

  const fullNameInvalid = useMemo(
    () => wasValidated && !formValid && !values.fullName,
    [wasValidated, formValid, values.fullName]
  );

  const emailInvalid = useMemo(
    () => wasValidated && !formValid && !validateEmail(values.email),
    [wasValidated, formValid, values.email]
  );

  const phoneNumberInvalid = useMemo(
    () => wasValidated && !formValid && !validatePhoneNumber(values.phoneNumber),
    [wasValidated, formValid, values.phoneNumber]
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

      successMessageRef.current.focus();
    } else {
      setFormValid(false);

      // move focus to the error message
      // errorMessageRef.current.focus();

      // or move focus to the first invalid field
      focusFirstInvalidField();
    }

    setWasValidated(true);
  };

  useEffect(() => {
    if (wasValidated && !formValid) {
      // move focus to the first invalid field
      focusFirstInvalidField();
    }
  }, [wasValidated, formValid]);

  const focusFirstInvalidField = () => {
    const firstInvalidField = formRef.current.querySelector(
      '[aria-invalid="true"]'
    );
    firstInvalidField && firstInvalidField.focus();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div>
        <h1>Drop us a message!</h1>
        <div ref={successMessageRef} tabIndex={-1}>
          {wasValidated && formValid && (
            <div className="message message--success" role="alert">
              We have saved your message, thank you!
            </div>
          )}
        </div>
        <div ref={errorMessageRef} tabIndex={-1}>
          {wasValidated && !formValid && (
            <div className="message message--error" role="alert">
              The form contains one or more errors. Below each invalid field, you
              will find a hint on how to fix the error.
            </div>
          )}
        </div>
        <p>All fields marked with * are required.</p>
        <form className="form" onSubmit={handleSubmit} ref={formRef} noValidate>
          <div className="form__row">
            <label className="form__label" htmlFor="fullName">
              Full name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={classNames({
                form__control: true,
                "form__control--invalid": fullNameInvalid
              })}
              aria-invalid={fullNameInvalid}
              required
              value={values.fullName}
              onChange={handleInputChange}
              {...(fullNameInvalid
                ? { "aria-describedby": "fullNameError" }
                : {})}
            />
            {fullNameInvalid && (
              <span className="form__error" id="fullNameError">
                Please enter your full name.
              </span>
            )}
          </div>

          <div className="form__row">
            <label className="form__label" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={classNames({
                form__control: true,
                "form__control--invalid": emailInvalid
              })}
              aria-invalid={emailInvalid}
              required
              value={values.email}
              onChange={handleInputChange}
              {...(emailInvalid ? { "aria-describedby": "emailError" } : {})}
            />
            {emailInvalid && (
              <span className="form__error" id="emailError">
                {values.email === ""
                  ? "Please enter your email address."
                  : "Please enter your email address in the correct format."}
              </span>
            )}
          </div>

          <div className="form__row">
            <label className="form__label" htmlFor="phoneNumber">
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={classNames({
                form__control: true,
                "form__control--invalid": phoneNumberInvalid
              })}
              aria-invalid={phoneNumberInvalid}
              placeholder="+420 123 456 789"
              aria-describedby="phoneNumberHelp"
              value={values.phoneNumber}
              onChange={handleInputChange}
              {...(phoneNumberInvalid ? { "aria-describedby": "phoneNumberError" } : {})}
            />
            {phoneNumberInvalid && (
              <span className="form__error" id="phoneNumberError">
                Please enter your phone number in the correct format.
              </span>
            )}
            <span className="form__help" id="phoneNumberHelp">
              You can enter the phone number with or without the country code and space characters.
            </span>
          </div>

          <div className="form__row">
            <label className="form__label" htmlFor="message">
              Your message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Anything you would like to share with us..."
              className={classNames({
                form__control: true,
                "form__control--invalid": messageInvalid
              })}
              aria-invalid={messageInvalid}
              required
              value={values.message}
              onChange={handleInputChange}
              {...(messageInvalid ? { "aria-describedby": "messageError" } : {})}
            ></textarea>
            {messageInvalid && (
              <span className="form__error" id="messageError">
                Please enter your message.
              </span>
            )}
          </div>

          <button type="submit" className="form__btn">
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
