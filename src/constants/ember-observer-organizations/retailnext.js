const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'retailnext',
  repositoryNames: ['ember-bem-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
