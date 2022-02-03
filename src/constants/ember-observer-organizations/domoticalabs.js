const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'domoticalabs',
  repositoryNames: ['ember-mqttjs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
