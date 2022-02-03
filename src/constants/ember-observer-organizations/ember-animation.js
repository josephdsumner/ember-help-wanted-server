const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-animation',
  repositoryNames: ['ember-animated', 'liquid-fire'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
