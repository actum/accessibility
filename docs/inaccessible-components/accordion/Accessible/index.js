import React from 'react'
import AccordionPanel from "./AccordionPanel";
import styles from "!!raw-loader!sass-loader!./index.scss"

const data = [
  {
    id: 1,
    title: 'Level A',
    text: '<a href="#">Level A</a> criteria are essential for all websites. If the website does not conform with level A, it may have serious accessibility issues that prevent users with disabilities from using it.'
  },
  {
    id: 2,
    title: 'Level AA',
    text: '<a href="#">Level AA</a> criteria are recommended as a minimum to meet. Websites that meet the level AA are accessible to a wider range of users in various circumstances.'
  },
  {
    id: 3,
    title: 'Level AAA',
    text: '<a href="#">Level AAA</a> criteria represent the highest WCAG conformance level. They may not be applicable for all websites to achieve as they usually require significant resources for conformance. However, some of them are affordable even for standard sites.'
  },
]

export default function Accordion() {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'next');
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'prev');
        break;
      }
      case 'Home': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'first');
        break;
      }
      case 'End': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'last');
        break;
      }
      default: {
        break;
      }
    }
  }

  const changeFocusToItem = (target, item) => {
    const items = Array.from(
      target.querySelectorAll('.a-accordion__item-button')
    );

    let index = [...target.children].indexOf(document.activeElement.closest('.a-accordion__item'))

    if (item === 'last') {
      index = items.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else if (item === 'prev') {
      index = index <= 0 ? items.length - 1 : index - 1;
    }

    items[index]?.focus();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div
        className="a-accordion"
        onKeyDown={handleKeyDown}
      >
        {data.map((item) => (
          <AccordionPanel key={item.id} id={item.id} title={item.title}>
            <div dangerouslySetInnerHTML={{__html: item.text}}/>
          </AccordionPanel>
        ))}
      </div>
    </>
  );
}
