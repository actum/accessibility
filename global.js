import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Issue: CSS :target selector does not work with client-side routing
// Hack: Update the URL hash on each route update
export function onRouteUpdate({location, previousLocation}) {
  if (location.pathname !== previousLocation?.pathname) {
    if (ExecutionEnvironment.canUseDOM && window.location.hash) {
      const {hash} = window.location

      window.location.hash = ""
      window.setTimeout(() => {
        window.location.hash = hash
      }, 1)
    }
  }
  return undefined;
}
