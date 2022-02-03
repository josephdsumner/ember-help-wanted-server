const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kellyselden',
  repositoryNames: ['ember-awesome-macros'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
