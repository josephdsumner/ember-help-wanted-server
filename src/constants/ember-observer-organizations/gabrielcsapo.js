const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'gabrielcsapo',
  repositoryNames: ['ember-cli-storybook'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
