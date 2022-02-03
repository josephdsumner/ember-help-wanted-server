const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Program-AR',
  repositoryNames: ['ember-blockly'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
