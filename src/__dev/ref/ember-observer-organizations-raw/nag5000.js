const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'nag5000',
  repositoryNames: ['ember-tippy'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
