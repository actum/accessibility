import React, { useState, useEffect }  from 'react'
import ReactShadowRoot from 'react-shadow-root';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Button from '../Button'
import { isBrowser } from '../../utils';

const PreviewWrapper = ({title, codeHref, children}) => {
  const [theme, setTheme] = useState(isBrowser ? document.documentElement.dataset.theme : '');

  function callback(mutationList) {
    mutationList.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        setTheme(isBrowser ? document.documentElement.dataset.theme : '');
      }
    })
  }

  if (isBrowser) {
    const observer = new MutationObserver(callback)
    observer.observe(document.documentElement, {attributes: true})
  }

  return (
    <>
      <div className="preview-wrapper">
        <div className="preview-wrapper__title">{title}</div>
        <div className="preview-wrapper__content">
          <ReactShadowRoot>
            <div data-theme={theme}>
              {children}
            </div>
          </ReactShadowRoot>
        </div>
      </div>

      { codeHref && <Button label="Edit on Codesandbox" href={`${codeHref}?fontsize=14&hidenavigation=1&theme=dark`} /> }
    </>
  )
}

export default PreviewWrapper
