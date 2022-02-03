const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Esri',
  repositoryNames: [
    'ember-arcgis-portal-services',
    'ember-cli-amd',
    'ember-cli-cedar',
    'ember-esri-loader',
    'torii-provider-arcgis',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
