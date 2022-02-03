const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'fusioncharts',
  repositoryNames: ['ember-fusioncharts'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
