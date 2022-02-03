const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rvenkatesh',
  repositoryNames: ['ember-slider', 'ember-resizable-smart-textarea'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
