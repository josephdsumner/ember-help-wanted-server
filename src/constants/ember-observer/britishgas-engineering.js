const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'britishgas-engineering',
  repositoryNames: ['ember-appointment-slots-pickers'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
