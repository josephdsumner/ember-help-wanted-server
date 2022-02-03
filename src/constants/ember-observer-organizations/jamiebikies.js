const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jamiebikies',
  repositoryNames: ['ember-pusher'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
