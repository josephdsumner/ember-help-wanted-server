const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jpadilla',
  repositoryNames: ['ember-simple-auth-token'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
