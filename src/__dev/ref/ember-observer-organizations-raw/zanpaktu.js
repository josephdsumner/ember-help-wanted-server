const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'zanpaktu',
  repositoryNames: ['ember-cli-reddit-pixel'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
