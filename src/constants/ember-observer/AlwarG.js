const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'AlwarG',
  repositoryNames: ['ember-mirage-gen'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
