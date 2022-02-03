const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kloeckner-i',
  repositoryNames: ['ember-cli-mirage-graphql'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
