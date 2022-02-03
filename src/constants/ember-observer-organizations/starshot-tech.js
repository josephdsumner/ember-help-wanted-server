const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'starshot-tech',
  repositoryNames: ['ember-pusher-js'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
