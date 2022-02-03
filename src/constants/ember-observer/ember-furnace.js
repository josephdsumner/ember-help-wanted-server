const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-furnace',
  repositoryNames: ['ember-cli-furnace-forms', 'ember-cli-furnace-validation'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
