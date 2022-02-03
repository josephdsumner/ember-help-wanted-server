const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'danmonroe',
  repositoryNames: ['ember-phaser'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
