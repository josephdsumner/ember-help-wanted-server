const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'unionups',
  repositoryNames: [
    'ember-cli-deploy-cloudinary',
    'ember-cli-deploy-lightning-cloudinary-pack',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
