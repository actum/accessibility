import { useCallback, useState } from 'react'

export const useForm = (
  initialValues,
  initialErrors,
  validationSchema,
  onSubmitCallback,
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const isValid = Object.values(errors).findIndex(error => !!error) < 0
  let isSubmitting = false

  const handleChange = useCallback(
    (event, id) => {
      setValues({
        ...values,
        [id ? id : event.target.id]: event.target.value,
      })
    },
    [values],
  )

  const validate = () => {
    setErrors(
      Object.assign(
        {},
        ...Object.entries(values).map(([key, value]) =>
          validationSchema(key, value),
        ),
      ),
    )
  }

  const handleSubmit = event => {
    event.preventDefault()

    isSubmitting = true

    validate()

    if (onSubmitCallback) {
      onSubmitCallback(values, isValid)
    }
  }

  const handleReset = event => {
    event.preventDefault()
    setValues(initialValues)
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
