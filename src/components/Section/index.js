import React from 'react'

const Section = ({ customClass = '', children }) => (
  <section className={`section ${customClass}`}>
    <div className="container">{children}</div>
  </section>
)

export default Section
