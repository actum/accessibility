import { useCallback, useState } from "react";

export const useForm = (initialValues, onSubmitCallback) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = useCallback(
    (event, id) => {
      setValues({
        ...values,
        [id ? id : event.target.id]: event.target.value
      });
    },
    [values]
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (onSubmitCallback) {
      onSubmitCallback(values);
    }
  };

  const handleFormReset = (event) => {
    event.preventDefault();
    setValues(initialValues);
  };

  return {
    values,
    handleInputChange,
    handleFormSubmit,
    handleFormReset,
    setValues
  };
};
