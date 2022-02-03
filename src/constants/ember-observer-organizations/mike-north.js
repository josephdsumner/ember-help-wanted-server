const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mike-north',
  repositoryNames: ['ember-api-actions', 'ember-cli-materialize', 'types'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
