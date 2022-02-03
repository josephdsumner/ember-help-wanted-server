const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Tonkpils',
  repositoryNames: ['ember-sweetalert'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
