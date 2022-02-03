const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-codemods',
  repositoryNames: [
    'ember-angle-brackets-codemod',
    'ember-tracked-properties-codemod',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
