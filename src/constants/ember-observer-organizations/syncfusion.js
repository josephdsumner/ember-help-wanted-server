const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'syncfusion',
  repositoryNames: ['syncfusion-ember'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
