const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'romulomachado',
  repositoryNames: ['ember-cli-string-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
