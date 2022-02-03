const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'krzema',
  repositoryNames: ['test-addon'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
