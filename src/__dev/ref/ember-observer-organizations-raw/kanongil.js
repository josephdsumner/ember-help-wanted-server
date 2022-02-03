const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kanongil',
  repositoryNames: ['ember-stable-hash'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
