/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // wcagSidebar: [{type: 'autogenerated', dirName: '.'}],
  // inaccessibleComponentsSidebar: [{type: 'autogenerated', dirName: './inaccessible-components'}],

  // But you can create a sidebar manually
  wcagDocuments: [
    {
      type: 'autogenerated',
      dirName: 'wcag-documents',
    },
  ],
  inaccessibleComponents: [
    {
      type: 'autogenerated',
      dirName: 'inaccessible-components',
    },
  ],
  userPreferences: [
    {
      type: 'autogenerated',
      dirName: 'user-preferences',
    },
  ]
};

module.exports = sidebars;
