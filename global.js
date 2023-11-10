import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Hack v1: Does not always work
// Issue: CSS :target selector does not work with client-side routing
// Hack: Update the URL hash on each route update
// export function onRouteUpdate({location, previousLocation}) {
//   if (location.pathname !== previousLocation?.pathname) {
//     if (ExecutionEnvironment.canUseDOM && window.location.hash) {
//       const {hash} = window.location

//       window.location.hash = ""
//       window.setTimeout(() => {
//         window.location.hash = hash
//       }, 1)
//     }
//   }
//   return undefined;
// }

// Hack v2
// Issue: CSS :target selector does not work with client-side routing
// Hack: Add a class to the element with the hash ID until Docusaurus fixes the issue

function handleHashChange() {
  if (ExecutionEnvironment.canUseDOM && window.location.hash) {
    const hash = window.location.hash.substring(1)
    const targetElement = document.getElementById(hash);
    const targetClassName = "url-target"

    document.querySelectorAll(`.${targetClassName}`).forEach((el) => el.classList.remove(targetClassName))

    if (targetElement) {
      targetElement.classList.add(targetClassName);
    }
  }
}

export function onRouteDidUpdate({location, previousLocation}) {
  if (location.pathname !== previousLocation?.pathname) {
    if (ExecutionEnvironment.canUseDOM && window.location.hash) {
      handleHashChange()
    }
  }
  return undefined;
}

if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener("hashchange", () => {
    handleHashChange()
  });
}

// A cross-browser check for high contrast mode detection
// https://stackoverflow.com/questions/55241841/high-contrast-mode-on-mozilla-browser

const detectHighContrastMode = () => {
  if (ExecutionEnvironment.canUseDOM) {
    const testColor = 'rgb(200, 100, 50)'
    const testDiv = document.createElement('div')

    testDiv.style.color = testColor
    document.body.appendChild(testDiv)

    // If the element's color after appending is different than it was set, the high contrast mode is active
    const currentColor = document.defaultView.getComputedStyle(testDiv, null).color
    document.body.removeChild(testDiv)

    if (currentColor !== testColor) {
      document.body.dataset.highContrast = ""
    }
  }
}

detectHighContrastMode()
