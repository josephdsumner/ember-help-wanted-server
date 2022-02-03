const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Bitwise-Development',
  repositoryNames: ['ember-cli-typedoc'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
