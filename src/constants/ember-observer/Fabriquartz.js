const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Fabriquartz',
  repositoryNames: [
    'ember-computed-convert-unit',
    'ember-marker-io',
    'ember-proxy-util',
    'ember-railio-pop-over',
    'ember-right-click-menu',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
