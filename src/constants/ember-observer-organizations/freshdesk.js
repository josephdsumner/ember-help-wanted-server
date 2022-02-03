const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'freshdesk',
  repositoryNames: ['nucleus'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
