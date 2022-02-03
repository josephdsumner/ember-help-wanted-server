const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jasonmit',
  repositoryNames: ['ember-cli-moment-shim', 'virtual-each'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
