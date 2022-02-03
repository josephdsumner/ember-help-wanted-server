const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'wackerservices',
  repositoryNames: ['embercustomlink', 'sitemapautogenerator'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
