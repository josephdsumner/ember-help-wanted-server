const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'flexberry',
  repositoryNames: [
    'ember-flexberry',
    'ember-flexberry-analytics',
    'ember-flexberry-data',
    'ember-flexberry-designer',
    'ember-flexberry-gis',
    'ember-flexberry-security',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
