const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'aomran',
  repositoryNames: ['ember-cli-chart'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
