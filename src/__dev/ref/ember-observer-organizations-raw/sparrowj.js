const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sparrowj',
  repositoryNames: ['ember-singularity'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
