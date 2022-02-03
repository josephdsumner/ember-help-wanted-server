const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'robert-allan-frank',
  repositoryNames: ['ember-datetime-fns', 'ember-string-fns'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
