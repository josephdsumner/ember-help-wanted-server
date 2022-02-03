const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'offirgolan',
  repositoryNames: [
    'ember-burger-menu',
    'ember-cp-validations',
    'ember-light-table',
    'ember-validators',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
