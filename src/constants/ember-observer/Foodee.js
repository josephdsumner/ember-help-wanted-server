const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Foodee',
  repositoryNames: ['ember-foxy-forms'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
