const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'addepar',
  repositoryNames: [
    'addepar-ember-toolbox',
    'addepar-style-toolbox',
    'ember-charts',
    'ember-classy-page-object',
    'ember-json-viewer',
    'ember-table',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
