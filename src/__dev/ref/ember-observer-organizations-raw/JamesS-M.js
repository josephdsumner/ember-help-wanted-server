const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'JamesS-M',
  repositoryNames: ['ember-delay-class-modifier'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
