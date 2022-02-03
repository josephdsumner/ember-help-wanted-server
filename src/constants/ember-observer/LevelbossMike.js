const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'LevelbossMike',
  repositoryNames: ['ember-statecharts'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
