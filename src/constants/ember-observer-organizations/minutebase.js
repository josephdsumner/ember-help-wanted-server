const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'minutebase',
  repositoryNames: ['ember-can', 'ember-inline-svg'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
