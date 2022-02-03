const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ivyapp',
  repositoryNames: ['ivy-tabs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
