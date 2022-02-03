const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kishoreyuvan',
  repositoryNames: ['ember-key-navigation'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
