import React, {useState} from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function RadioGroup() {
  const options = [
    { contactType: "email", id: 1, label: "Email" },
    { contactType: "phone", id: 2, label: "Phone" },
    { contactType: "mail", id: 3, label: "Mail" },
  ];

  const [radio, setRadio] = useState(options[0].contactType);
  const [selected, setSelected] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setSelected(radio);
  };

  const handleChange = (e) => {
    setRadio(e.target.value);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <form onSubmit={formSubmit}>
        <fieldset role="radiogroup">
          <legend>Please select your preferred contact method:</legend>
          <div className="a-radio-group">
            {options.map(({ id, contactType, label }) => {
              return (
                <label key={id} className="a-radio-group__label">
                  <input
                    type="radio"
                    name="contact"
                    value={contactType}
                    id={id}
                    checked={radio === contactType}
                    aria-checked={radio === contactType}
                    onChange={handleChange}
                    className="a-radio-group__input"
                  />
                  {label}
                </label>
              );
            })}
          </div>
          <button
            className="a-radio-group__submit"
            type="submit"
            onClick={formSubmit}
          >
            Submit
          </button>

          {selected && (
            <p className="a-radio-group__alert" role="alert">
              Preferred contact method: <span>{selected}</span>
            </p>
          )}
        </fieldset>
      </form>
    </>
  );
}
