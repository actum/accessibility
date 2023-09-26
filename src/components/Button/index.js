import React from 'react'
import Link from '@docusaurus/Link'
import ArrowSvg from '../../../static/img/arrow.svg'

const Button = ({ label, ariaLabel, href }) => {
  if (label) {
    if (href) {
      return (
        <Link to={href} className="btn btn--primary" aria-label={ariaLabel}>
          <span>{label}</span>
          <ArrowSvg className="btn__icon" aria-hidden="true" />
        </Link>
      )
    } else {
      return (
        <button type="button" className="btn btn--primary" aria-label={ariaLabel}>
          <span>{label}</span>
          <ArrowSvg className="btn__icon" aria-hidden="true" />
        </button>
      )
    }
  }
}

export default Button
