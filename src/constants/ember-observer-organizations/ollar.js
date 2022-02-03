const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ollar',
  repositoryNames: [
    'draggable-modifier',
    'ember-popup-component',
    'ember-radio',
    'ember-tabs-component',
    'image-resize-util',
    'site-drawer-component',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
