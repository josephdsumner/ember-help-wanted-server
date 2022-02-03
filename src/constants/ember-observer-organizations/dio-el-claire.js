const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'dio-el-claire',
  repositoryNames: ['ember-leaflet-google-mutant-layer'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
