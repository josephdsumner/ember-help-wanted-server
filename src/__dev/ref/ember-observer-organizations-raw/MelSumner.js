const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'MelSumner',
  repositoryNames: ['ember-a11y-landmarks', 'mommy-look'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
