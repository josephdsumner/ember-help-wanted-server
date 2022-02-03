const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pdud',
  repositoryNames: ['ember-float-label'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
