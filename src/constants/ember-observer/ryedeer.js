const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ryedeer',
  repositoryNames: ['ember-cli-markdown-templates'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
