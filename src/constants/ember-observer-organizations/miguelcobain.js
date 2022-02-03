const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'miguelcobain',
  repositoryNames: [
    'ember-clerk',
    'ember-cli-element-closest-polyfill',
    'ember-cli-polyfill-importer',
    'ember-composability-tools',
    'ember-data-cascade-delete',
    'ember-dynamic-render-template',
    'ember-leaflet',
    'ember-leaflet-rotated-marker',
    'ember-paper',
    'ember-simple-auth-clerk',
    'ember-yeti-table',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
