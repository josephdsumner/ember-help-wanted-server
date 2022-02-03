const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-swiper',
  repositoryNames: ['ember-cli-swiper'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
