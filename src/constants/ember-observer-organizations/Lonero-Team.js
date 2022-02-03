const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Lonero-Team',
  repositoryNames: ['Decentralized-Internet'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
