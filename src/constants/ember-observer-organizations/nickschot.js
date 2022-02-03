const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'nickschot',
  repositoryNames: [
    'ember-bootstrap-model-select',
    'ember-gesture-modifiers',
    'ember-ion-spinner',
    'ember-mobile-menu',
    'ember-model-select',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
