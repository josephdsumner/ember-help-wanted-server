const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jscrambler',
  repositoryNames: ['jscrambler'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
