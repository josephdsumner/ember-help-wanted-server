const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'canufeel',
  repositoryNames: ['ember-leaflet-marker-cluster'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
