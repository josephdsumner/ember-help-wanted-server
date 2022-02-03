const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jftechnology',
  repositoryNames: ['ember-keycloak-auth', 'ember-route-metadata'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
