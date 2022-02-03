const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'alexlafroscia',
  repositoryNames: ['ember-cli-polyfill-io', 'ember-context', 'ember-steps'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
