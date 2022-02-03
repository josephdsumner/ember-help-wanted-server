const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'wildland',
  repositoryNames: ['ember-bootstrap-controls'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
