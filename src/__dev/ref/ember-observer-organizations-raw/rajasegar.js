const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'rajasegar',
  repositoryNames: [
    'ember-addon-starterkit',
    'ember-aria-accordion',
    'ember-aria-multi-thumb-slider',
    'ember-aria-switch',
    'ember-chance',
    'ember-connection-aware-media',
    'ember-csz',
    'ember-dayjs-helpers',
    'ember-jarvis',
    'ember-off-canvas-sidebar',
    'ember-plantuml',
    'ember-responsive-tabs',
    'ember-slide-push-menu',
    'ember-smart-input',
    'ember-stylish-buttons',
    'ember-turbo-css',
    'ember-voca',
    'ember-web-component-container',
    'ember-x-tabs',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
