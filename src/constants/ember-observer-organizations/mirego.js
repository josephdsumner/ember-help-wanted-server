const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mirego',
  repositoryNames: ['ember-best-language'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
