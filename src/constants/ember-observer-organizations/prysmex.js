const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'prysmex',
  repositoryNames: ['ember-eui', 'ember-fetch-request', 'ember-scopes'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
