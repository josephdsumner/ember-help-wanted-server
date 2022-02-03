const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jkeen',
  repositoryNames: ['ember-stereo'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
