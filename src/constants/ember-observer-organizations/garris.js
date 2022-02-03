const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'garris',
  repositoryNames: ['ember-backstop'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
