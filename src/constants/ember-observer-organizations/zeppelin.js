const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'zeppelin',
  repositoryNames: ['ember-click-outside'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
