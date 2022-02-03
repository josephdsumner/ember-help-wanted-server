const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bitbird-dev',
  repositoryNames: ['Bitbird.Core.Ember.UI'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
