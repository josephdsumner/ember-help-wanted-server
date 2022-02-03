const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'willviles',
  repositoryNames: ['ember-leaflet-heatmap', 'ember-useragent'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
