const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'skaterdav85',
  repositoryNames: ['ember-changeset-conditional-validations'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
