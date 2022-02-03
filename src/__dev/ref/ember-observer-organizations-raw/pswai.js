const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pswai',
  repositoryNames: ['ember-cli-react-fork'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
