const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mariana-tek',
  repositoryNames: ['ember-fullcalendar'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
