const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'alechirsch',
  repositoryNames: ['ember-search-flow'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
