const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rayangou',
  repositoryNames: ['ember-pacejs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
