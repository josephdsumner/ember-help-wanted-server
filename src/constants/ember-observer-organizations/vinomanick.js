const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'vinomanick',
  repositoryNames: ['ember-event-scheduler'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
