const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'zoltan-nz',
  repositoryNames: ['ember-bootstrap-nav-link'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
