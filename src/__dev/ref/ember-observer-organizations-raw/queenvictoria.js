const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'queenvictoria',
  repositoryNames: ['ember-videojs'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
