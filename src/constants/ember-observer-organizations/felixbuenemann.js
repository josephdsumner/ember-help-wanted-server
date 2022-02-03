const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'felixbuenemann',
  repositoryNames: ['ember-cli-brotli'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
