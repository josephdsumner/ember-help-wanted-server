const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'embermn',
  repositoryNames: ['ember-cli-plotly', 'ember-magnitude-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
