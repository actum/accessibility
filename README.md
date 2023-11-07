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

WCAG (Web Content Accessibility Guidelines) documents published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C) explain how to make the web content more accessible to people with various abilities and disabilities.

Our simplified WCAG documents can help you to learn the essential information to understand and develop more accessible websites.

There are also videos (explaining the guidelines) available for each document - the videos and documents are made progressively.

### Inaccessible Components

A collection of inaccessible components demonstrates common accessibility and usability issues developers create (mostly unintentionally) when building websites.

Our inaccessible components show common bad practices in web development so you can avoid them.

There are also videos (explaining the issues) available for each component - the videos are made progressively.

### User Preferences

Users have many options how to customize their web-browsing experience today. While certain user preferences take effect across all websites once set in the operating system (such as zoom or resolution changes), others require implementation from developers to function appropriately - light, dark, or high-contrast (forced colors) mode, reduced motion mode, or font size preferences.

Learn about these user preferences, how to support them with some implementation tips, and what it could mean for users if the preferences are not respected.

There are also videos (explaining the details) available for each user preference - the videos and documents are made progressively.

## Technical Information

The website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

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

When creating new MDX docs, reuse existing patterns to achieve consistency and prevent bugs - sometimes, working with MDX can create not obvious issues, such as:
- To use a code block (by wrapping the code between the <code>\`\`\`</code> characters) inside the `<details>` element, there must be an empty line before the code block in order for the code to render properly.
- To use an inline code block (by wrapping the code between the <code>\`</code> characters) inside the `<details>` element, you must use the <code>code</code> element, as backticks syntax will not work.

When adding new WCAG Documents criterion, make sure to create links to it on all relevant places (there is no automation for now):
- [WCAG Documents intro page](./docs/wcag-documents/intro.mdx)
- [Glossary of Terms](./docs/wcag-documents/glossary-of-terms.mdx) if any terms are used on the page (only link the first occurence)
- Principles, such as [Perceivable](./docs/wcag-documents/1-perceivable/1-perceivable.mdx)
- Guidelines, such as [Text Alternatives](./docs/wcag-documents/1-perceivable/1.1-text-alternatives/1.1-text-alternatives.mdx)

When creating new component, always create a [CodeSandbox](https://codesandbox.io/) project for it. Contact the main developer to get access to the CodeSandbox account.

Code in CodeSandbox is essentialy the same as in this project but with a few differences. Components in this project are wrapped inside the ShadowDOM to allow CSS encapsulation so styles of components do not affect the rest of the page. This is not needed in CodeSandbox, so mind these things differ:
- importing and propagating styles in the component
- paths to assets
- extra `body` styles

Images in the project should be consistent and have the same style. When you want to add a new one, request it from the Apollo Visual Library (contact the main developer to get there). Follow the same pattern of adding images, e.g. images have 1x and 2x DPR versions, most of them are 400px wide, and so on. Also, make sure they work in the dark mode too - draw a white outline around the border of all dark outer colors.

Always compress images.

### Shooting Videos

We sometimes show images of code snippets in our YouTube videos. The images are made through https://carbon.now.sh/ with the following config (make sure to import it under Settings -> Misc -> Import config):

```json
{
  "paddingVertical": "50px",
  "paddingHorizontal": "56px",
  "backgroundImage": null,
  "backgroundImageSelection": null,
  "backgroundMode": "color",
  "backgroundColor": "rgba(0,0,0,1)",
  "dropShadow": false,
  "dropShadowOffsetY": "20px",
  "dropShadowBlurRadius": "68px",
  "theme": "one-dark",
  "windowTheme": "boxy",
  "language": "htmlmixed",
  "fontFamily": "Hack",
  "fontSize": "14px",
  "lineHeight": "133%",
  "windowControls": false,
  "widthAdjustment": true,
  "lineNumbers": false,
  "firstLineNumber": 1,
  "exportSize": "2x",
  "watermark": false,
  "squaredImage": false,
  "hiddenCharacters": false,
  "name": "",
  "width": 600,
  "highlights": null
}
```

The color settings might be changed by video editors later.
