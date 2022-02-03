const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'robotjonez',
  repositoryNames: ['ember-cli-updated-google-tag-analytics'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
