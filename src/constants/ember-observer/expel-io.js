const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'expel-io',
  repositoryNames: ['ember-ajax-fetch'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
