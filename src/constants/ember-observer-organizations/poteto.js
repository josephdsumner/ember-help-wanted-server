const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'poteto',
  repositoryNames: [
    'ember-changeset',
    'ember-changeset-validations',
    'ember-cli-flash',
    'ember-deep-set',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
