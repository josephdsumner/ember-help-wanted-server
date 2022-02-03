const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'intercom',
  repositoryNames: ['ember-href-to', 'ember-undo-stack'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
