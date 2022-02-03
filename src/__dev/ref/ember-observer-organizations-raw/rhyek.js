const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'rhyek',
  repositoryNames: ['ember-master-tab'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
