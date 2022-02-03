const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'PrinceCornNM',
  repositoryNames: ['ember-pca-predict'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
