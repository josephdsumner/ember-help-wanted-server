const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'RVenkatesh',
  repositoryNames: ['Ember-slider', 'ember-resizable-smart-textarea'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
