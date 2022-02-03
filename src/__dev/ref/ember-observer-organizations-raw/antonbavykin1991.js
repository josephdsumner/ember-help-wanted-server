const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'antonbavykin1991',
  repositoryNames: ['ember-vest'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
