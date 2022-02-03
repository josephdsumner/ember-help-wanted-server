const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'cybertooth-io',
  repositoryNames: ['ember-data-autocomplete-js'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
