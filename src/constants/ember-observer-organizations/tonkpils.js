const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'tonkpils',
  repositoryNames: ['ember-sweetalert'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
