const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'siva-sundar',
  repositoryNames: ['ember-template-inspector'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
