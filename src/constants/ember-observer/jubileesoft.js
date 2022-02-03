const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jubileesoft',
  repositoryNames: ['ember-jubileesoft-ui'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
