const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'codemodern',
  repositoryNames: ['ember-tracked-nested'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
