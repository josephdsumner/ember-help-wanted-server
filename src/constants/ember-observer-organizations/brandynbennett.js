const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'brandynbennett',
  repositoryNames: ['ember-inputmask'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
