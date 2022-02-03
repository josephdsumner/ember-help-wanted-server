const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mjanjic01',
  repositoryNames: ['ember-konva'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
