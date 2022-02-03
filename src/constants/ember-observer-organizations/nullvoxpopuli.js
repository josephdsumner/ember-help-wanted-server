const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'nullvoxpopuli',
  repositoryNames: ['ember-cli-esbuild', 'ember-cli-swc-minifier'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
