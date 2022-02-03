const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'wackerservices',
  repositoryNames: ['EmberCustomLink', 'SitemapAutogenerator'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
