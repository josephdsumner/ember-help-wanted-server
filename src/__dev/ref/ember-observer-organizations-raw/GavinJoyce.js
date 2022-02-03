const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'GavinJoyce',
  repositoryNames: ['ember-headlessui'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
