const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'tzellman',
  repositoryNames: [
    'ember-events-modifier',
    'ember-fakerjs',
    'ember-stopwatch',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
