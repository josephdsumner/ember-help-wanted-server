const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dmtask',
  repositoryNames: ['ember-spinner'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
