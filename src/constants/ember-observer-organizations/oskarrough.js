const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'oskarrough',
  repositoryNames: ['ember-wordpress'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
