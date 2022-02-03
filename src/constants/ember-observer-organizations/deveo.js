const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'deveo',
  repositoryNames: ['ember-emojione'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
