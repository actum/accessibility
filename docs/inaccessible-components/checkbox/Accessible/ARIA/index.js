import styles from "!!raw-loader!sass-loader!./index.scss"
import React, { useState } from 'react';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      setIsChecked(!isChecked)
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="a-aria-field">
        <div
          className="a-aria-checkbox__wrapper"
          role="checkbox"
          tabIndex={0}
          onClick={() => setIsChecked(!isChecked)}
          onKeyDown={(e) => handleKeyDown(e)}
          aria-checked={isChecked ? 'true' : 'false'}
        >
          <div className="a-aria-checkbox__box">
            <svg viewBox="0 0 490 490">
              <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
            </svg>
          </div>

          I tested my page with automated accessibility tests.
        </div>
      </div>
    </>
  );
}
