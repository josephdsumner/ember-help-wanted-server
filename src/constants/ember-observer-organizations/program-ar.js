const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'program-ar',
  repositoryNames: ['ember-blockly'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
