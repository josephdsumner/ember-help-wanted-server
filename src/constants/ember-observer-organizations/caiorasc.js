const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'caiorasc',
  repositoryNames: ['ember-implicit-grant-authenticator'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
