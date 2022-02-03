const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'chrismllr',
  repositoryNames: ['ember-validation-state'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
