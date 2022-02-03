const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: '201-created',
  repositoryNames: ['ember-cli-fake-server'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
