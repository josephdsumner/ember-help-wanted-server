const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'orbitjs',
  repositoryNames: ['ember-orbit'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
