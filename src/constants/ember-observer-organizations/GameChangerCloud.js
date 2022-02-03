const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'GameChangerCloud',
  repositoryNames: ['addon-ember-client-gamechanger'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
