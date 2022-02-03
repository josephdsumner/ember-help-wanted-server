const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ritesh83',
  repositoryNames: ['ember-cli-jstree'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
