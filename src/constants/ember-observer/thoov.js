const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'thoov',
  repositoryNames: ['ember-websockets'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
