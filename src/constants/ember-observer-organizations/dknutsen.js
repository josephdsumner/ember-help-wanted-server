const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'dknutsen',
  repositoryNames: ['ember-themed'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
