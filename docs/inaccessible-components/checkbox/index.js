import React, { useState } from 'react';
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="field">
        <div className="checkbox__wrapper">
          <input
            type="checkbox"
            className="checkbox"
            name="subscribe"
            value="subscribe"
            aria-checked={isChecked}
          />

          <div
            className={`checkbox__box ${isChecked ? 'checkbox__box--checked' : '' }`}
            tabIndex={0}
            role="checkbox"
            onClick={() => setIsChecked(!isChecked)}
          >
            <svg viewBox="0 0 490 490">
              <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
            </svg>
          </div>
        </div>
        <label htmlFor="subscribe" onClick={() => setIsChecked(!isChecked)}>I tested my page with automated accessibility tests.</label>
      </div>
    </>
  );
}
