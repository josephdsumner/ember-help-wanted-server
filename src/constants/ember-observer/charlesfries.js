const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'charlesfries',
  repositoryNames: ['ember-simple-bootstrap', 'ember-text-highlight'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
