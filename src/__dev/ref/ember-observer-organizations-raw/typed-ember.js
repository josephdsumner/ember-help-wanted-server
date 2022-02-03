const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'typed-ember',
  repositoryNames: ['ember-cli-typescript'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
