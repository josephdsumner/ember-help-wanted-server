const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'klclee',
  repositoryNames: ['ember-cli-mp'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
