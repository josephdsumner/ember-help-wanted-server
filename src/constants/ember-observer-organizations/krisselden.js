const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'krisselden',
  repositoryNames: ['ember-cli-optimize'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
