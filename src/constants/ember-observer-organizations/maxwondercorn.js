const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'maxwondercorn',
  repositoryNames: ['ember-cli-barcode'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
