const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ivanvotti',
  repositoryNames: ['ember-svg-jar'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
