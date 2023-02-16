import React from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Checkbox() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="a-field">
        <div className="a-checkbox__wrapper">
          <input
            type="checkbox"
            className="a-checkbox"
            id="a-subscribe"
            name="a-subscribe"
            value="subscribe"
          />

          <div className="a-checkbox__box">
            <svg viewBox="0 0 490 490">
              <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
            </svg>
          </div>

          <label htmlFor="a-subscribe">I tested my page with automated accessibility tests.</label>
        </div>
      </div>
    </>
  );
}
