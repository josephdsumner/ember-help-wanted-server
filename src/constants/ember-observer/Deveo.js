const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Deveo',
  repositoryNames: ['ember-emojione'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
