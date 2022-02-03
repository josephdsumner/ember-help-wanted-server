const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'miragejs',
  repositoryNames: ['ember-cli-mirage'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
