const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kiwiupover',
  repositoryNames: ['ember-cli-surge', 'ember-mockdate'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
