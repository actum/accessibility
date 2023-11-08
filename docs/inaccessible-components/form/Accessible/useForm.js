import { useCallback, useState } from 'react'

export const useForm = (
  initialValues,
  initialErrors,
  validationSchema,
  onSubmitCallback,
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isValid = Object.values(errors).findIndex(error => !!error) < 0

  const handleChange = useCallback(
    (event, id) => {
      setValues({
        ...values,
        [id ? id : event.target.id]: event.target.value,
      })
    },
    [values],
  )

  const validate = useCallback(() => {
    setErrors(
      Object.entries(values).reduce(
        (acc, [key, value]) => ({ ...acc, ...validationSchema(key, value) }),
        {},
      ),
    )
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    setIsSubmitting(true)
    validate()

    if (onSubmitCallback) {
      onSubmitCallback(values, isValid)
    }
  }

  const handleReset = event => {
    event.preventDefault()
    setValues(initialValues)
    setErrors(initialErrors)
    setIsSubmitting(false)
  }

  return {
    values,
    errors,
    isValid,
    isSubmitting,
    onChange: handleChange,
    onSubmit: handleSubmit,
    onFormReset: handleReset,
    setValues,
  }
}
