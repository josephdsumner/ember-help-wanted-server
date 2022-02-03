const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mindclue',
  repositoryNames: ['ember-cli-bootstrap4-datetimepicker'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
