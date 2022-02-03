const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'raido',
  repositoryNames: ['ember-window-messenger'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
