const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'arenoir',
  repositoryNames: ['ember-credit-cards', 'ember-tabella'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
