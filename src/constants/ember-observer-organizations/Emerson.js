const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Emerson',
  repositoryNames: ['ember-form-master-2000'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
