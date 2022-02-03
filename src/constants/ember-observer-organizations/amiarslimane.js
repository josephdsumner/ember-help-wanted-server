const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'amiarslimane',
  repositoryNames: ['ember-opening-hours'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
