const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'annotationsro',
  repositoryNames: [
    'ember-advanced-combobox',
    'ember-advanced-validations',
    'ember-mobile-inputs',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
