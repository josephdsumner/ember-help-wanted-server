const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jamess-m',
  repositoryNames: ['ember-delay-class-modifier'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
