import React from 'react'
import Link from '@docusaurus/Link'
import ArrowSvg from '../../../static/img/arrow.svg'

const Button = ({ label, href }) => {
  if (label) {
    if (href) {
      return (
        <Link to={href} className="btn btn--primary">
          <span>{label}</span>
          <ArrowSvg className="btn__icon" />
        </Link>
      )
    } else {
      return (
        <button type="button" className="btn btn--primary">
          <span>{label}</span>
          <ArrowSvg className="btn__icon" />
        </button>
      )
    }
  }
}

export default Button
