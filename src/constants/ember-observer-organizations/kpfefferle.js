const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kpfefferle',
  repositoryNames: [
    'ember-cli-deploy-aws-pack',
    'ember-cli-deploy-cloudfront',
    'ember-octicons',
    'liquid-fire-reveal',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
