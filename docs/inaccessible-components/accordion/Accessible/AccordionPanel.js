import React, { useState } from 'react';
import IconArrow from '../../../../static/img/icon-arrow-up.svg'

export default function AccordionPanel({ id, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div className={`a-accordion__item ${isOpen ? 'a-accordion__item--open' : ''}`}>
      <h3 className="a-accordion__item-header">
        <button
          className="a-accordion__item-button"
          onClick={handleClick}
          id={`accordion-header-${id}`}
          aria-controls={`accordion-panel-${id}`}
          aria-expanded={isOpen}
        >
          {title}
          <IconArrow className="a-accordion__item-icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="a-accordion__item-content"
        id={`accordion-panel-${id}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}
