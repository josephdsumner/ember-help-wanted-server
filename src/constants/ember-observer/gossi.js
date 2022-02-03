const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'gossi',
  repositoryNames: ['ember-cite', 'ember-command'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
