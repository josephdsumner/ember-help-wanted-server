const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'vasilionjea',
  repositoryNames: ['ember-a11y-accordion'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
