const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'scoutforpets',
  repositoryNames: ['ember-fullcalendar'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
