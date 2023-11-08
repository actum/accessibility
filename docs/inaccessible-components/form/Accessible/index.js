import React, { useEffect, useRef, useCallback } from 'react'
import { useForm } from './useForm'
import classNames from 'classnames'
import styles from '!!raw-loader!sass-loader!./index.scss'

const initialValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const initialErrors = {
  fullName: false,
  email: false,
  phoneNumber: false,
  message: false,
}

const validateEmail = email =>
  !new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ).test(email)

const validatePhoneNumber = phoneNumber => {
  if (phoneNumber === '') return true

  return !new RegExp(
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
  ).test(phoneNumber)
}

// validation schema returns errors as booleans
const validationSchema = (id, value) => {
  let errors = {}
  if (id === 'fullName') {
    errors.fullName = !value
  } else if (id === 'phoneNumber') {
    errors.phoneNumber = validatePhoneNumber(value)
  } else if (id === 'email') {
    errors.email = validateEmail(value)
  } else if (id === 'message') {
    errors.message = !value
  }

  return errors
}

export default function Form() {
  const formRef = useRef(null)
  const errorMessageRef = useRef(null)
  const successMessageRef = useRef(null)

  const handleSubmit = useCallback((_values, isFormValid) => {
    if (isFormValid) {
      successMessageRef.current.focus()
      // sends request with values
    } else {
      // move focus to the error message
      errorMessageRef.current.focus()
      // or move focus to the first invalid field
      focusFirstInvalidField()
    }
  }, [])

  const {
    values,
    errors,
    isValid,
    isSubmitting,
    onChange: handleChange,
    onSubmit,
  } = useForm(initialValues, initialErrors, validationSchema, handleSubmit)

  useEffect(() => {
    if (isSubmitting && !isValid) {
      // move focus to the first invalid field
      focusFirstInvalidField()
    }
  }, [isSubmitting, isValid])

  const focusFirstInvalidField = () => {
    const firstInvalidField = formRef.current.querySelector(
      '[aria-invalid="true"]',
    )
    firstInvalidField && firstInvalidField.focus()
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div>
        <h1>Drop us a message!</h1>
        <div ref={successMessageRef} tabIndex={-1}>
          {isSubmitting && isValid && (
            <div className="message message--success" role="alert">
              We have saved your message, thank you!
            </div>
          )}
        </div>
        <div ref={errorMessageRef} tabIndex={-1}>
          {isSubmitting && !isValid && (
            <div className="message message--error" role="alert">
              The form contains one or more errors. Below each invalid field,
              you will find a hint on how to fix the error.
            </div>
          )}
        </div>
        <p>All fields marked with * are required.</p>
        <form className="form" onSubmit={onSubmit} ref={formRef} noValidate>
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
                'form__control--invalid': errors.fullName,
              })}
              aria-invalid={errors.fullName}
              required
              value={values.fullName}
              onChange={handleChange}
              {...(errors.fullName
                ? { 'aria-describedby': 'fullNameError' }
                : {})}
            />
            {errors.fullName && (
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
                'form__control--invalid': errors.email,
              })}
              aria-invalid={errors.email}
              required
              value={values.email}
              onChange={handleChange}
              {...(errors.email ? { 'aria-describedby': 'emailError' } : {})}
            />
            {errors.email && (
              <span className="form__error" id="emailError">
                {values.email === ''
                  ? 'Please enter your email address.'
                  : 'Please enter your email address in the correct format.'}
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
                'form__control--invalid': errors.phoneNumber,
              })}
              aria-invalid={errors.phoneNumber}
              placeholder="+420 123 456 789"
              aria-describedby="phoneNumberHelp"
              value={values.phoneNumber}
              onChange={handleChange}
              {...(errors.phoneNumber
                ? { 'aria-describedby': 'phoneNumberError' }
                : {})}
            />
            {errors.phoneNumber && (
              <span className="form__error" id="phoneNumberError">
                Please enter your phone number in the correct format.
              </span>
            )}
            <span className="form__help" id="phoneNumberHelp">
              You can enter the phone number with or without the country code
              and space characters.
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
                'form__control--invalid': errors.message,
              })}
              aria-invalid={errors.message}
              required
              value={values.message}
              onChange={handleChange}
              {...(errors.message
                ? { 'aria-describedby': 'messageError' }
                : {})}
            ></textarea>
            {errors.message && (
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
  )
}
