const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'evgenyorekhov',
  repositoryNames: ['actus/tree/master/packages/actus-ember'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
