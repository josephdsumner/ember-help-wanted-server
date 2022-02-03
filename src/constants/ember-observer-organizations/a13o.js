const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'a13o',
  repositoryNames: ['ember-class-list'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
