const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'gamechangercloud',
  repositoryNames: ['addon-ember-client-gamechanger'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
