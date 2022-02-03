const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'djsegal',
  repositoryNames: ['ember-browser-checker'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
