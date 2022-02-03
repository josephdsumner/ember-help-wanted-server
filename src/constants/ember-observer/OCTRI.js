const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'OCTRI',
  repositoryNames: ['ember-i18next'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
