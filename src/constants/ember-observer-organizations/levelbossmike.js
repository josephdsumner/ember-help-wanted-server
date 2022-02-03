const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'levelbossmike',
  repositoryNames: ['ember-statecharts'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
