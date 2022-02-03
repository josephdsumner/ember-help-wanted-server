const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'nlfurniss',
  repositoryNames: ['ember-simple-wormhole'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
