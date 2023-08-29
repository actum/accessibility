# ACTUM Digital Accessibility

A portal of ACTUM Digital projects dedicated to web accessibility.

## Project Purpose

### Knowledge sharing

We want to share our knowledge about the web accessibility and also help people understand and experience differences between accessible and inaccessible web.

### Accessibility awareness

We want to spread awareness about the web accessibility because we believe it is essential, not optional. A huge percent of websites are still inaccessible.

### Knowledge base

We want to keep this project also as our knowledge base, reflecting our experience with the web accessibility, and progressively update it as we learn more.

## Current projects:

### WCAG Documents

WCAG (Web Content Accessibility Guidelines) documents published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C) explain how to make web content more accessible to people with various abilities and disabilities.

Our simplified WCAG documents can help you to learn the essential information to understand and develop more accessible websites.

There are also videos (explaining the guidelines) available for each document.

### Inaccessible Components

A collection of inaccessible components demonstrates common accessibility and usability issues developers create (mostly unintentionally) when building websites.

Our inaccessible components show common bad practices in web development so you can avoid them.

There are also videos (explaining the issues) available for each component.

## Technical Information

The website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The static build is automatically deployed on each push to the `main` branch - either directly or via the pull request.

### Contribution

We appreciate any kind of contribution that helps us share the information about the web accessibility knowledge better. Should you have any suggestion on what to add, edit, or remove, please, create an issue.

## Application Info

### Project Structure

There is only one page (homepage) with the information about the website. The individual projects are placed in the docs part of the application.
Components and styles inside the `src` folder are used across the whole website, so both for the homepage and projects.

### Adding new Content

When creating new MDX docs, reuse existing patterns to achieve consistency and prevent bugs - sometimes, working with MDX can create not obvious issues. For example, if you want to use a code block (by wrapping the code inside the <code>\`\`\`</code> characters) inside the `<details>` element, there must be an empty line before the code block in order for the code to render properly.

When adding new WCAG Documents criterion, make sure to create links to it on all relevant places (there is no automation for now):
- [WCAG Documents intro page](./docs/wcag-documents/intro.md)
- [Glossary of Terms](./docs/wcag-documents/glossary-of-terms.md) if any terms are used on the page (only link the first occurance)
- Principles, such as [Perceivable](./docs/wcag-documents/1-perceivable/1-perceivable.mdx)
- Guidelines, such as [Text Alternatives](./docs/wcag-documents/1-perceivable/1.1-text-alternatives/1.1-text-alternatives.mdx)

When creating new component, always create a [CodeSandbox](https://codesandbox.io/) project for it. Contact the main developer to get access to the CodeSandbox account.

Code in CodeSandbox is essentialy the same as in this project but with a few differences. Components in this project are wrapped inside the ShadowDOM to allow CSS encapsulation so styles of components do not affect the rest of the page. This is not needed in CodeSandbox, so mind these things differ:
- importing and propagating styles in the component
- paths to assets
- extra `body` styles
