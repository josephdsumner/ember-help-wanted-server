const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'amiarSlimane',
  repositoryNames: ['ember-opening-hours'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
