const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'shuriu',
  repositoryNames: ['ember-do-forms'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
