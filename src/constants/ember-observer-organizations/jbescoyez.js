const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jbescoyez',
  repositoryNames: ['ember-light-form'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
