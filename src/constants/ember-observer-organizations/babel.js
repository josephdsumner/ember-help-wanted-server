const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'babel',
  repositoryNames: ['ember-cli-babel'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
