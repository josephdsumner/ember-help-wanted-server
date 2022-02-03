const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'tradegecko',
  repositoryNames: ['tradegecko-warehousing'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
