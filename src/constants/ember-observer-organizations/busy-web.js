const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'busy-web',
  repositoryNames: ['data', 'ember-date-time'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
