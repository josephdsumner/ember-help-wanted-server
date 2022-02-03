const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'networkteam',
  repositoryNames: ['ember-cli-maskedinput'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
