const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sutori',
  repositoryNames: ['torii-clever'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
