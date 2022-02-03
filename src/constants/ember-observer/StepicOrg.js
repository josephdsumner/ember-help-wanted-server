const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'StepicOrg',
  repositoryNames: ['ember-cli-environment-config-replace', 'ember-tinykeys'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
