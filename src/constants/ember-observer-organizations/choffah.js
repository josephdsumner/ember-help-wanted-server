const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'choffah',
  repositoryNames: ['ember-cookieconsent'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
