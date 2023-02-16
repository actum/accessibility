import React, {useState} from 'react'
import FocusTrap from 'focus-trap-react';
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <button type="button" onClick={() => {
        setIsModalOpen(true)
      }}>
        Open accessible modal window
      </button>

      <div
        className={`a-modal__wrapper ${isModalOpen ? 'a-modal__wrapper--open' : ''}`}
        hidden={!isModalOpen}
      >
        <FocusTrap
          active={isModalOpen}
          focusTrapOptions={{
            onActivate: () => {
              document.body.classList.add("modal-open")
            },
            onDeactivate: () => {
              setIsModalOpen(false)
              document.body.classList.remove("modal-open")
            },
            clickOutsideDeactivates: true,
          }}
        >
          <div
            className="a-modal"
            aria-labelledby="modal-2-heading"
            role="dialog"
          >
            <div className="a-modal__content">
              <h2 className="a-modal__title" id="modal-2-heading">
                WCAG Criterion 1.1.1 - Non-text Content - A
              </h2>

              <p>The intent of this criterion is to make non-text information accessible through text alternatives.</p>
              <p>You might also learn more about the <a href="/docs/wcag-documentsperceivable/1.1-text-alternatives/1.1.1-non-text-content">non-text content</a> rule.</p>

              <button
                type="button"
                className="a-modal__close-btn"
                aria-label="Close"
                onClick={() => {
                  setIsModalOpen(false)
                }}
              >X</button>
            </div>
          </div>
        </FocusTrap>
      </div>
    </>
  );
}
