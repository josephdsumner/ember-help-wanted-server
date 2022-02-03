const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ronco',
  repositoryNames: ['ember-cli-head', 'ember-cli-meta-tags'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
