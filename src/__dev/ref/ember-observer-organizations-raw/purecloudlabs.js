const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'purecloudlabs',
  repositoryNames: ['ember-data-visualizations'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
