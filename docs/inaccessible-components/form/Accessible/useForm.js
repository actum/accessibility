import { useCallback, useEffect, useState } from 'react'

export const useForm = (
  initialValues,
  initialErrors,
  validationSchema,
  onSubmitCallback,
) => {
  const [state, setState] = useState({
    values: initialValues,
    errors: initialErrors,
    isSubmitting: false,
  })
  const isValid = Object.values(state.errors).findIndex(error => !!error) < 0

  const handleChange = useCallback(
    (event, id) => {
      setState(ps => ({
        ...ps,
        values: {
          ...ps.values,
          [id ? id : event.target.id]: event.target.value,
        },
      }))
    },
    [state],
  )

  const validate = useCallback(
    (nextValues, options) => {
      setState(ps => ({
        ...ps,
        ...options,
        errors: Object.entries(nextValues).reduce(
          (acc, [key, value]) => ({ ...acc, ...validationSchema(key, value) }),
          {},
        ),
      }))
    },
    [state],
  )

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      validate(state.values, { isSubmitting: true })
    },
    [state],
  )

  const handleReset = useCallback(() => {
    setState({
      values: initialValues,
      errors: initialErrors,
      isSubmitting: false,
    })
  }, [])

  useEffect(() => {
    if (onSubmitCallback && state.isSubmitting) {
      onSubmitCallback(state.values, isValid)
    }
  }, [state.errors])

  return {
    ...state,
    isValid,
    onChange: handleChange,
    onSubmit: handleSubmit,
    onFormReset: handleReset,
  }
}
