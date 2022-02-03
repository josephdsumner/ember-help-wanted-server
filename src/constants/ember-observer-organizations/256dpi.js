const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: '256dpi',
  repositoryNames: ['ember-fire'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
