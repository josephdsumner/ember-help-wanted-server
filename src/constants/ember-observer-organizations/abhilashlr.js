const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'abhilashlr',
  repositoryNames: ['ember-handsontable', 'ember-thumbor-images'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
