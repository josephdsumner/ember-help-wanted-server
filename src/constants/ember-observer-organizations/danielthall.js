const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'danielthall',
  repositoryNames: ['ember-cropperjs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
