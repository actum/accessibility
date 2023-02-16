import React from 'react'
import AccordionPanel from "./AccordionPanel";
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Accordion() {
  const data = [
    {
      title: 'Level A',
      text: '<a href="#">Level A</a> criteria are essential for all websites. If the website does not conform with level A, it may have serious accessibility issues that prevent users with disabilities from using it.'
    },
    {
      title: 'Level AA',
      text: '<a href="#">Level AA</a> criteria are recommended as a minimum to meet. Websites that meet the level AA are accessible to a wider range of users in various circumstances.'
    },
    {
      title: 'Level AAA',
      text: '<a href="#">Level AAA</a> criteria represent the highest WCAG conformance level. They may not be applicable for all websites to achieve as they usually require significant resources for conformance. However, some of them are affordable even for standard sites.'
    },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="accordion">
        {data.map((item) => <AccordionPanel key={item.title} title={item.title} text={item.text} />)}
      </div>
    </>
  );
}
