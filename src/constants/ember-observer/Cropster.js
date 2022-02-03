const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Cropster',
  repositoryNames: ['ember-l10n'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
