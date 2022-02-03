const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'cph',
  repositoryNames: [
    'ember-list-keyboard-navigator',
    'ember-search-with-modifiers',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
