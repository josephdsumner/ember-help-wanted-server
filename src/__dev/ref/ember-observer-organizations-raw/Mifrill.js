const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Mifrill',
  repositoryNames: [
    'ember-data-stop-infinite-retry-for-failed-relationship-fetches',
    'ember-intl-errors',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();