const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bhsiung',
  repositoryNames: ['ember-form-validity'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
