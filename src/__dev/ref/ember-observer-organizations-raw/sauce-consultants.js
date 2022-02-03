const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sauce-consultants',
  repositoryNames: [
    'ember-analytic-sauce',
    'ember-mirage-sauce',
    'ember-ux-date-sauce',
    'ember-ux-sauce',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
