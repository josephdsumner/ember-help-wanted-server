const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'prakashchokalingam',
  repositoryNames: ['ember-fill-in-file'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
