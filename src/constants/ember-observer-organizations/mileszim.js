const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mileszim',
  repositoryNames: ['ember-cli-ipfs', 'ember-data-orbitdb-adapter'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
