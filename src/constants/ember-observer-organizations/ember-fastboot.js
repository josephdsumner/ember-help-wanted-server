const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-fastboot',
  repositoryNames: ['ember-cli-fastboot'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();