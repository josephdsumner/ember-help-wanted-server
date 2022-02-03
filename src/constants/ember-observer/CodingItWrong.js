const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'CodingItWrong',
  repositoryNames: ['ember-paper-layout'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
