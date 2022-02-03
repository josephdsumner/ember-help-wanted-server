const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'johnotander',
  repositoryNames: ['ember-faker'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
