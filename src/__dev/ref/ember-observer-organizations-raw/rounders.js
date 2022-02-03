const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'rounders',
  repositoryNames: ['ember-world-flags'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
