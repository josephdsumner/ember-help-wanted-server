const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'chriskrycho',
  repositoryNames: ['ember-async-data', 'ember-simple-track-helper'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
