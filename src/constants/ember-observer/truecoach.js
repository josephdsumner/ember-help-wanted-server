const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'truecoach',
  repositoryNames: ['ember-fit-form'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
