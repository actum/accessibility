import React, { useState, useRef } from "react";
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Tabs() {
  const data = [
    {
      id: 'react',
      title: 'React',
      text: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on user interface components. It is maintained by <a href="https://about.facebook.com/">Meta</a> (formerly Facebook) and a community of individual developers and companies.'
    },
    {
      id: 'vue',
      title: 'Vue',
      text: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page applications</a>. It was created by Evan You, and is maintained by him and the rest of the active core team members.'
    },
    {
      id: 'angular',
      title: 'Angular',
      text: 'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by <a href="https://en.wikipedia.org/wiki/Google">Google</a> and a community of individuals and corporations.'
    },
  ]

  const [activePanelId, setActivePanelId] = useState(data[0].id)
  const tabRefs = useRef([]);

  const handleTablistClick = (id) => setActivePanelId(id)

  const isPanelActive = (id) => id === activePanelId

  const changeFocusToTab = (item) => {
    let index = data.findIndex((item) => item.id === activePanelId)

    if (item === 'last') {
      index = tabRefs.current.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === tabRefs.current.length - 1 ? 0 : index + 1;
    } else if (item === 'prev') {
      index = index <= 0 ? tabRefs.current.length - 1 : index - 1;
    }

    setActivePanelId(tabRefs.current[index].dataset.id)
    tabRefs.current[index].focus()
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft': {
        e.preventDefault();
        changeFocusToTab('prev');
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        changeFocusToTab('next');
        break;
      }
      case 'Home': {
        e.preventDefault();
        changeFocusToTab('first');
        break;
      }
      case 'End': {
        e.preventDefault();
        changeFocusToTab('last');
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="a-tabs">
        <h3 id="fe-libs-frameworks">Front end libraries and frameworks</h3>

        <p>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
        <p>There are several libraries and frameworks that help speed up the front end development. The most popular are React, Vue, and Angular.</p>

        <ul
          className="a-tabs__list"
          role="tablist"
          aria-labelledby="fe-libs-frameworks"
          onKeyDown={handleKeyDown}
        >
          {data.map(({id, title}, index) => (
            <li
              id={`tab-${id}`}
              data-id={id}
              key={`tab-${id}`}
              onClick={() => handleTablistClick(id)}
              onFocus={() => handleTablistClick(id)}
              role="tab"
              aria-selected={isPanelActive(id)}
              aria-controls={`tabpanel-${id}`}
              tabIndex={isPanelActive(id) ? "0" : "-1"}
              className={`
                a-tabs__list-item
                ${isPanelActive(id) ? 'a-tabs__list-item--active' : ''}
              `}
              ref={(element) => {tabRefs.current[index] = element}}
            >{title}
            </li>
          ))}
        </ul>

        <div className="a-tabs__panel-container">
          {data.map(({id, text}) => (
            <div
              role="tabpanel"
              aria-labelledby={`tab-${id}`}
              key={`tabpanel-${id}`}
              id={`tabpanel-${id}`}
              className={`
                a-tabs__panel
                ${isPanelActive(id) ? 'a-tabs__panel--active' : ''}
              `}
              dangerouslySetInnerHTML={{__html: text}}
            />
          ))}
        </div>
      </div>
    </>
  );
}
