const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'gavinjoyce',
  repositoryNames: ['ember-headlessui'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
