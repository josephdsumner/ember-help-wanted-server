const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Luinova',
  repositoryNames: ['ember-line-clamp'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
