const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ahmadsoe',
  repositoryNames: ['ember-highcharts'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
