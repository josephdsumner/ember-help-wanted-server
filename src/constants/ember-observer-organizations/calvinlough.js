const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'calvinlough',
  repositoryNames: ['ember-tag-input'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
