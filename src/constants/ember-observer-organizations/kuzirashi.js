const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kuzirashi',
  repositoryNames: ['ember-link-action'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
