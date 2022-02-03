const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'imgix',
  repositoryNames: ['ember-cli-imgix'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
