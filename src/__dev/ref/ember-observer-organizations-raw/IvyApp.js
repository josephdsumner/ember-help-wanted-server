const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'IvyApp',
  repositoryNames: ['ivy-tabs'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();