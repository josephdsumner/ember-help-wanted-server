const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'pharbersdeveloper',
  repositoryNames: ['ember-cli-web-components'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
