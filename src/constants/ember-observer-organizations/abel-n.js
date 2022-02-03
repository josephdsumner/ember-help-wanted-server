const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'abel-n',
  repositoryNames: ['ember-argument-decorator'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
