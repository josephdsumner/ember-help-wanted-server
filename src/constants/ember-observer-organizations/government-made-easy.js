const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'government-made-easy',
  repositoryNames: ['nsw-design-components'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
