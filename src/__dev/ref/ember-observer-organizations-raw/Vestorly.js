const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Vestorly',
  repositoryNames: ['ember-cli-emblem'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
