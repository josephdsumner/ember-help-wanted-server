const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kategengler',
  repositoryNames: ['ember-cli-browserstack', 'ember-cli-code-coverage'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
