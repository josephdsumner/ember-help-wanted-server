const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bullet-db',
  repositoryNames: ['ember-localforage'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
