const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'houfeng0923',
  repositoryNames: ['ember-cli-global-env', 'ember-cli-mix-build'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
