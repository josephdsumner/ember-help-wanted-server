const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dfreeman',
  repositoryNames: ['ember-css-modules-sass'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
