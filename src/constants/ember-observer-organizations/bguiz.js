const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bguiz',
  repositoryNames: ['ember-cli-json-pretty'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
