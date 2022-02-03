const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'moonshot-partners',
  repositoryNames: ['ember-lottie-wrapper'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
