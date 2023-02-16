import React, { useState } from "react";
import styles from "!!raw-loader!sass-loader!./index.scss"

export default function Tabs() {
  const data = [
    {
      id: 'panel-react',
      title: 'React',
      text: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on user interface components. It is maintained by <a href="https://about.facebook.com/">Meta</a> (formerly Facebook) and a community of individual developers and companies.'
    },
    {
      id: 'panel-vue',
      title: 'Vue',
      text: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page applications</a>. It was created by Evan You, and is maintained by him and the rest of the active core team members.'
    },
    {
      id: 'panel-angular',
      title: 'Angular',
      text: 'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by <a href="https://www.apple.com/">Google</a> and a community of individuals and corporations.'
    },
  ]

  const [activePanelId, setActivePanelId] = useState(data[0].id)

  const handleTablistClick = (id) => setActivePanelId(id)

  const isPanelActive = (id) => id === activePanelId

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="tabs">
        <ul className="tabs__list">
          {data.map(({id, title}) => (
            <li
              data-tabpanel-id={id}
              key={id}
              onClick={() => handleTablistClick(id)}
              onMouseEnter={() => handleTablistClick(id)}
              tabIndex={0}
              className={`
                tabs__list-item
                ${isPanelActive(id) ? 'tabs__list-item--active' : ''}
              `}
            >{title}</li>
          ))}
        </ul>

        <p>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
        <p>There are several libraries and frameworks that help speed up the front end development. The most popular are React, Vue, and Angular.</p>

        <div className="tabs__panel-container">
          {data.map(({id, text}) => (
            <div
              key={id}
              id={id}
              className={`
                tabs__panel
                ${isPanelActive(id) ? 'tabs__panel--active' : ''}
              `}
              dangerouslySetInnerHTML={{__html: text}}
            />
          ))}
        </div>
      </div>
    </>
  );
}
