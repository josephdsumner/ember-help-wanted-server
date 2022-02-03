const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-infinity',
  repositoryNames: ['ember-infinity'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
