const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bushbaby',
  repositoryNames: ['ember-leaflet-gesture-handling'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
