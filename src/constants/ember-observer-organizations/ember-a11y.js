const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-a11y',
  repositoryNames: [
    'a11y-announcer',
    'ember-a11y-refocus',
    'ember-a11y-testing',
    'ember-select-light',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
