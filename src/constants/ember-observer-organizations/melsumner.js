const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'melsumner',
  repositoryNames: ['ember-a11y-landmarks', 'mommy-look'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
