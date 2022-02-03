const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'showbie',
  repositoryNames: ['backpack-ember'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
