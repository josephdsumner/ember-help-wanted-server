const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'PharbersDeveloper',
  repositoryNames: ['ember-cli-web-components'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
