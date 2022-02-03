const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Gavant',
  repositoryNames: [
    'ember-app-blueprint',
    'ember-floating-labels',
    'ember-power-select-infinity',
    'ember-shopify-draggable',
    'gavant-ember-bootstrap-dropdown',
    'gavant-ember-button-basic',
    'gavant-ember-button-link',
    'gavant-ember-button-spinner',
    'gavant-ember-table',
    'gavant-ember-tiny-mce',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
