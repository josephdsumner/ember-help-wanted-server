const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Semantic-Org',
  repositoryNames: ['Semantic-UI-Ember'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
