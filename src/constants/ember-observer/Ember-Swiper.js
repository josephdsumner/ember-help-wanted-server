const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Ember-Swiper',
  repositoryNames: ['ember-cli-swiper'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
