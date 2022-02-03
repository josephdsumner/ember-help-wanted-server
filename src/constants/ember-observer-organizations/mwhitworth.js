const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mwhitworth',
  repositoryNames: ['ember-fontsource'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
