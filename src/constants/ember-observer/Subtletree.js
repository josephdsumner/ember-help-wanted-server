const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Subtletree',
  repositoryNames: ['ember-paper-link'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
