const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'gianlucatomasino',
  repositoryNames: ['ember-on-fire'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
