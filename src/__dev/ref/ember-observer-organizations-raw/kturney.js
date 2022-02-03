const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kturney',
  repositoryNames: ['ember-mapbox-gl'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
