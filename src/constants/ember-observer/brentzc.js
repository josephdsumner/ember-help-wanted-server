const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'brentzc',
  repositoryNames: ['ember-rough-notation'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
