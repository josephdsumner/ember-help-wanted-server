const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dumb-Ledore',
  repositoryNames: ['ember-leaflet-draw-controls'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
