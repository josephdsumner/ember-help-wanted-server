const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'linkedin',
  repositoryNames: [
    'css-blocks/tree/master/packages/%40css-blocks/ember',
    'css-blocks/tree/master/packages/%40css-blocks/ember-app',
    'css-blocks/tree/master/packages/%40css-blocks/ember-cli',
    'eyeglass',
    'self-focused',
    'tracked-queue',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
