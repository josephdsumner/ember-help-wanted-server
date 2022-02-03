const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Krzema',
  repositoryNames: ['test-addon'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
