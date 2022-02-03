const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'izelnakri',
  repositoryNames: ['mber-head'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
