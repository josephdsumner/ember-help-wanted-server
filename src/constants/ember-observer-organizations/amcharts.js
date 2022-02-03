const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'amcharts',
  repositoryNames: ['amcharts4'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
