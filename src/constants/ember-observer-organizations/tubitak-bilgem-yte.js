const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'tubitak-bilgem-yte',
  repositoryNames: ['ember-contextual-table'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
