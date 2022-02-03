const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kaermorchen',
  repositoryNames: ['ember-cli-loaders', 'ember-mdi', 'ember-photoswipe'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
