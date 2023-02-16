import React from 'react'
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Breadcrumb() {
  const data = [
    {
      id: 1,
      text: '1 - Perceivable',
      url: '#'
    },
    {
      id: 2,
      text: '1.1 - Text Alternatives',
      url: '#'
    },
    {
      id: 3,
      text: '1.1.1 - Non-text content - A',
      url: '#'
    }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="breadcrumb">
        <ul className="breadcrumb__list">
          {data.map((item, index) => (
            <>
              <li key={item.id} className="breadcrumb__list-item">
                <a href={item.url} className="breadcrumb__link" aria-label={`Breadcrumb ${item.text}`}>{item.text}</a>
                {index !== data.length - 1 && ('/')}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
