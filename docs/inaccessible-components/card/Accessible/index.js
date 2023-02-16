import React from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Card() {
  const data = [
    {
      title: "Perceivable",
      text: "Information and user interface components must be presentable to users in ways they can perceive.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable"
    },
    {
      title: "Operable",
      text: "User interface components and navigation must be operable.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable"
    },
    {
      title: "Understandable",
      text: "Information and the operation of the user interface must be understandable.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable"
    },
    {
      title: "Robust",
      text: "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      url: "https://invalid-developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust"
    }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />

      <ul className="cards">
        {data.map(({title, text, url}) => (
          <li key={title} className="card">
            <img src="https://satyr.dev/450x200?delay=1000" alt="" className="card__image" />
            <div className="card__content-wrapper">
              <h3 className="card__title">
                <a href={url} aria-describedby={`read-more-${title}`}>{title}</a>
              </h3>
              <p className="card__text">{text}</p>
              <span className="card__link" id={`read-more-${title}`}>Read more</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
