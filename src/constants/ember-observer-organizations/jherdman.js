const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jherdman',
  repositoryNames: ['ember-cli-chartist'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
