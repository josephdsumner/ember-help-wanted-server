const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'yahoo',
  repositoryNames: [
    'ember-gridstack',
    'ember-power-calendar-selectors',
    'navi/tree/master/packages/search',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
