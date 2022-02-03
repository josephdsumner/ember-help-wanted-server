const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'DanMonroe',
  repositoryNames: ['ember-phaser'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
