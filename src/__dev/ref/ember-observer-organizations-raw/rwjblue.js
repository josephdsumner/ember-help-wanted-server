const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'rwjblue',
  repositoryNames: [
    'ember-angle-bracket-invocation-polyfill',
    'ember-cli-content-security-policy',
    'ember-cli-inject-live-reload',
    'ember-cli-pretender',
    'ember-getowner-polyfill',
    'ember-holy-futuristic-template-namespacing-batman',
    'ember-router-helpers',
    'pretender-query-param-handler',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
