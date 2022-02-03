const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'step2yeung',
  repositoryNames: ['ember-cli-addon-guard'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
