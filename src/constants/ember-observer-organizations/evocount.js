const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'evocount',
  repositoryNames: [
    'ember-amcharts',
    'ember-leaflet-pm',
    'ember-resizable',
    'ember-scanner',
    'ember-tui-editor',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
