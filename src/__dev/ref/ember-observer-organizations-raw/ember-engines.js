const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-engines',
  repositoryNames: ['ember-engines'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
