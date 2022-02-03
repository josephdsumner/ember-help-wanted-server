const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-graphql',
  repositoryNames: ['ember-apollo-client'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
