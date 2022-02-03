const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kennethkalmer',
  repositoryNames: ['ember-cli-nouislider'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
