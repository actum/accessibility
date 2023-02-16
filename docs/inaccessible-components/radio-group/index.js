import React, {useState} from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function RadioGroup() {
  const options = [
    { name: "email", id: 1, label: "Email" },
    { name: "phone", id: 2, label: "Phone" },
    { name: "mail", id: 3, label: "Mail" },
  ];

  const [checkedList, setCheckedList] = useState(options);

  const changeList = (id, checked) => {
    const newCheckedList = toggleOption(id, checked);
    setCheckedList(newCheckedList);
  };

  const toggleOption = (id, checked) => {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : option
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <section className="radios">
        <div>
          <p>Please select your preferred contact method:</p>
          <div className="radio-group">
            {checkedList.map(({ id, name, checked, label }) => (
              <div key={id}>
                <input
                  type="radio"
                  name={name}
                  value={id}
                  id={id}
                  checked={checked}
                  onChange={(e) => changeList(id, e.target.checked)}
                  className="radio-group__item"
                />
                <label className="radio-group__label">{label}</label>
              </div>
            ))}
          </div>
          <div>
            <button
              type="button"
              className="radio-group__submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
