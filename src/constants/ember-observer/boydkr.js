const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'boydkr',
  repositoryNames: ['ember-navigation-guard'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
