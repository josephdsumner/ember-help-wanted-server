const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'GreatWizard',
  repositoryNames: ['ember-circleci'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
