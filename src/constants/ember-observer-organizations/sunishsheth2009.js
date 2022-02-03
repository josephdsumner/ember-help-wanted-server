const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'sunishsheth2009',
  repositoryNames: ['ember-async-component'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
