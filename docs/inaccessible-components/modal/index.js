import React, {useState} from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseButtonClick = () => {
    setIsModalOpen(false)

    const focusableElements = document.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];

    setTimeout(() => {
      firstFocusableElement.focus()
    }, 300)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div
        className={`modal__wrapper ${isModalOpen ? 'modal__wrapper--open' : ''}`}
      >
        <div
          className="modal"
          role="modal"
          aria-describedby="modal-1-close-btn"
        >
          <div className="modal__content">
            <h2 className="modal__title">
              WCAG Criterion 1.1.1 - Non-text Content - A
            </h2>

            <p>The intent of this criterion is to make non-text information accessible through text alternatives.</p>
            <marquee behavior="" direction="">
              <p>Recommendation: You might also learn more about this criterion. <a href="/docs/wcag-documentsperceivable/1.1-text-alternatives/1.1.1-non-text-content">Click here</a> to learn more.</p>
            </marquee>

            <button
              id="modal-1-close-btn"
              className="modal__close-btn"
              onClick={handleCloseButtonClick}
            >X</button>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => setIsModalOpen(true)}>
        Open modal window
      </button>
    </>
  );
}
