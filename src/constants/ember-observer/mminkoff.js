const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mminkoff',
  repositoryNames: ['ember-filestack'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
