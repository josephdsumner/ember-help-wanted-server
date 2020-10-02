const adopted_ember_addons = require('./repos/adopted-ember-addons');

const community = [
  ...adopted_ember_addons,
  { name: 'ember-cli/ember-twiddle', label: 'good first issue' },
  { name: 'ember-cli/ember-twiddle', label: 'help wanted' },
  { name: 'ember-engines/ember-engines', label: 'help wanted' },
  { name: 'typed-ember/ember-cli-typescript', label: 'good first issue' },
  { name: 'typed-ember/ember-cli-typescript', label: 'help wanted' },
];

const core = [
  { name: 'ember-cli/ember-cli', label: 'good first issue' },
  { name: 'emberjs/data', label: 'Good for New Contributors' },
  { name: 'emberjs/ember-inspector', label: 'good for new contributors' },
  { name: 'emberjs/ember-inspector', label: 'help wanted' },
  { name: 'emberjs/ember-optional-features', label: 'good first issue' },
  { name: 'emberjs/ember-optional-features', label: 'help wanted' },
  { name: 'emberjs/ember-test-helpers', label: 'beginner-friendly' },
  { name: 'emberjs/ember.js', label: 'Good for New Contributors' },
  { name: 'emberjs/ember.js', label: 'Help Wanted' },
];

const emberHelpWanted = [
  { name: 'ember-learn/ember-help-wanted', label: 'good first issue' },
  { name: 'ember-learn/ember-help-wanted', label: 'help wanted' },
];

const learning = [
  { name: 'ember-learn/builds', label: 'DecEmber'},
  { name: 'ember-learn/cli-guides', label: 'DecEmber'},
  { name: 'ember-learn/contact-book', label: 'DecEmber'},
  { name: 'ember-learn/deprecation-app', label: 'help wanted' },
  { name: 'ember-learn/ember-api-docs', label: 'help wanted' },
  { name: 'ember-learn/ember-help-wanted', label: 'DecEmber' },
  { name: 'ember-learn/ember-help-wanted-server', label: 'DecEmber' },
  { name: 'ember-learn/ember-styleguide', label: 'DecEmber' },
  { name: 'ember-learn/ember-styleguide', label: 'help wanted :sos:' },
  { name: 'ember-learn/ember-website', label: 'DecEmber' },
  { name: 'ember-learn/ember-website', label: 'good first issue' },
  { name: 'ember-learn/ember-website', label: 'help wanted' },
  { name: 'ember-learn/guides-app', label: 'DecEmber' },
  { name: 'ember-learn/guides-app', label: 'help wanted' },
  { name: 'ember-learn/guides-source', label: 'DecEmber' },
  { name: 'ember-learn/guides-source', label: 'help wanted' },
  { name: 'ember-learn/statusboard', label: 'DecEmber'},
  { name: 'ember-learn/tutorials', label: 'DecEmber'},
];

const octane = [
  { name: 'ember-cli/amd-name-resolver', label: 'octane' },
  { name: 'ember-cli/api', label: 'octane' },
  { name: 'ember-cli/app-blueprint-test', label: 'octane' },
  { name: 'ember-cli/babel-plugin-debug-macros', label: 'octane' },
  { name: 'ember-cli/babel-plugin-ember-modules-api-polyfill', label: 'octane' },
  { name: 'ember-cli/babel-plugin-feature-flags', label: 'octane' },
  { name: 'ember-cli/babel-plugin-filter-imports', label: 'octane' },
  { name: 'ember-cli/babel-plugin-htmlbars-inline-precompile', label: 'octane' },
  { name: 'ember-cli/blprnt', label: 'octane' },
  { name: 'ember-cli/broccoli-amd-funnel', label: 'octane' },
  { name: 'ember-cli/broccoli-babili', label: 'octane' },
  { name: 'ember-cli/broccoli-brocfile-loader', label: 'octane' },
  { name: 'ember-cli/broccoli-builder', label: 'octane' },
  { name: 'ember-cli/broccoli-caching-writer', label: 'octane' },
  { name: 'ember-cli/broccoli-config-loader', label: 'octane' },
  { name: 'ember-cli/broccoli-config-replace', label: 'octane' },
  { name: 'ember-cli/broccoli-funnel-reducer', label: 'octane' },
  { name: 'ember-cli/broccoli-middleware', label: 'octane' },
  { name: 'ember-cli/broccoli-module-normalizer', label: 'octane' },
  { name: 'ember-cli/broccoli-uglify-sourcemap', label: 'octane' },
  { name: 'ember-cli/broccoli-viz', label: 'octane' },
  { name: 'ember-cli/calculate-cache-key-for-tree', label: 'octane' },
  { name: 'ember-cli/canonicalize-addon-name', label: 'octane' },
  { name: 'ember-cli/capture-exit', label: 'octane' },
  { name: 'ember-cli/clean-base-url', label: 'octane' },
  { name: 'ember-cli/console-ui', label: 'octane' },
  { name: 'ember-cli/core-object', label: 'octane' },
  { name: 'ember-cli/create-ember-addon', label: 'octane' },
  { name: 'ember-cli/create-ember-app', label: 'octane' },
  { name: 'ember-cli/ember-addon-output', label: 'octane' },
  { name: 'ember-cli/ember-ajax', label: 'octane' },
  { name: 'ember-cli/ember-cli', label: 'octane' },
  { name: 'ember-cli/ember-cli-add-template-compiler-to-package', label: 'octane' },
  { name: 'ember-cli/ember-cli-app-version', label: 'octane' },
  { name: 'ember-cli/ember-cli-babili', label: 'octane' },
  { name: 'ember-cli/ember-cli-blueprint-test-helpers', label: 'octane' },
  { name: 'ember-cli/ember-cli-chai', label: 'octane' },
  { name: 'ember-cli/ember-cli-changelog', label: 'octane' },
  { name: 'ember-cli/ember-cli-clean-css', label: 'octane' },
  { name: 'ember-cli/ember-cli-default-packager', label: 'octane' },
  { name: 'ember-cli/ember-cli-eslint', label: 'octane' },
  { name: 'ember-cli/ember-cli-get-component-path-option', label: 'octane' },
  { name: 'ember-cli/ember-cli-get-dependency-depth', label: 'octane' },
  { name: 'ember-cli/ember-cli-htmlbars', label: 'octane' },
  { name: 'ember-cli/ember-cli-htmlbars-inline-precompile', label: 'octane' },
  { name: 'ember-cli/ember-cli-import-polyfill', label: 'octane' },
  { name: 'ember-cli/ember-cli-inject-live-reload', label: 'octane' },
  { name: 'ember-cli/ember-cli-internal-test-helpers', label: 'octane' },
  { name: 'ember-cli/ember-cli-is-package-missing', label: 'octane' },
  { name: 'ember-cli/ember-cli-jshint', label: 'octane' },
  { name: 'ember-cli/ember-cli-lodash-subset', label: 'octane' },
  { name: 'ember-cli/ember-cli-media', label: 'octane' },
  { name: 'ember-cli/ember-cli-mocha', label: 'octane' },
  { name: 'ember-cli/ember-cli-normalize-entity-name', label: 'octane' },
  { name: 'ember-cli/ember-cli-path-utils', label: 'octane' },
  { name: 'ember-cli/ember-cli-preprocess-registry', label: 'octane' },
  { name: 'ember-cli/ember-cli-qunit', label: 'octane' },
  { name: 'ember-cli/ember-cli-shims', label: 'octane' },
  { name: 'ember-cli/ember-cli-string-utils', label: 'octane' },
  { name: 'ember-cli/ember-cli-test-info', label: 'octane' },
  { name: 'ember-cli/ember-cli-test-loader', label: 'octane' },
  { name: 'ember-cli/ember-cli-uglify', label: 'octane' },
  { name: 'ember-cli/ember-cli-update', label: 'octane' },
  { name: 'ember-cli/ember-cli-update-codemods-manifest', label: 'octane' },
  { name: 'ember-cli/ember-cli-valid-component-name', label: 'octane' },
  { name: 'ember-cli/ember-cli-version-checker', label: 'octane' },
  { name: 'ember-cli/ember-cli.github.io', label: 'octane' },
  { name: 'ember-cli/ember-disable-prototype-extensions', label: 'octane' },
  { name: 'ember-cli/ember-exam', label: 'octane' },
  { name: 'ember-cli/ember-export-application-global', label: 'octane' },
  { name: 'ember-cli/ember-fetch', label: 'octane' },
  { name: 'ember-cli/ember-load-initializers', label: 'octane' },
  { name: 'ember-cli/ember-maybe-import-regenerator-for-testing', label: 'octane' },
  { name: 'ember-cli/ember-modules-codemod', label: 'octane' },
  { name: 'ember-cli/ember-new-output', label: 'octane' },
  { name: 'ember-cli/ember-next', label: 'octane' },
  { name: 'ember-cli/ember-octane-blueprint', label: 'octane' },
  { name: 'ember-cli/ember-resolver', label: 'octane' },
  { name: 'ember-cli/ember-rfc176-data', label: 'octane' },
  { name: 'ember-cli/ember-router-generator', label: 'octane' },
  { name: 'ember-cli/ember-source-channel-url', label: 'octane' },
  { name: 'ember-cli/ember-try', label: 'octane' },
  { name: 'ember-cli/ember-try-config', label: 'octane' },
  { name: 'ember-cli/ember-twiddle', label: 'octane' },
  { name: 'ember-cli/ember-welcome-page', label: 'octane' },
  { name: 'ember-cli/eslint-plugin-ember', label: 'octane' },
  { name: 'ember-cli/loader.js', label: 'octane' },
  { name: 'ember-cli/node-modules-path', label: 'octane' },
  { name: 'ember-cli/process-relative-require', label: 'octane' },
  { name: 'ember-cli/silent-error', label: 'octane' },
  { name: 'ember-cli/stress-app', label: 'octane' },
  { name: 'ember-cli/yuidoc-ember-cli-theme', label: 'octane' },

  { name: 'ember-learn/agendas', label: 'octane' },
  { name: 'ember-learn/algolia-index-update-scripts', label: 'octane' },
  { name: 'ember-learn/annual-community-survey', label: 'octane' },
  { name: 'ember-learn/cli-guides', label: 'octane' },
  { name: 'ember-learn/contact-book', label: 'octane' },
  { name: 'ember-learn/deprecation-app', label: 'octane' },
  { name: 'ember-learn/discourse-emberjs-theme', label: 'octane' },
  { name: 'ember-learn/dockerized-ember', label: 'octane' },
  { name: 'ember-learn/docs-whyEmber', label: 'octane' },
  { name: 'ember-learn/ember-api-docs', label: 'octane' },
  { name: 'ember-learn/ember-blog', label: 'octane' },
  { name: 'ember-learn/ember-cli-addon-docs', label: 'octane' },
  { name: 'ember-learn/ember-cli-addon-docs-esdoc', label: 'octane' },
  { name: 'ember-learn/ember-cli-addon-docs-yuidoc', label: 'octane' },
  { name: 'ember-learn/ember-core-dashboard', label: 'octane' },
  { name: 'ember-learn/ember-help-wanted', label: 'octane' },
  { name: 'ember-learn/ember-help-wanted-server', label: 'octane' },
  { name: 'ember-learn/ember-issue-triage-chrome', label: 'octane' },
  { name: 'ember-learn/ember-issue-triage-lambda', label: 'octane' },
  { name: 'ember-learn/ember-jsonapi-docs', label: 'octane' },
  { name: 'ember-learn/ember-learn-search-components', label: 'octane' },
  { name: 'ember-learn/ember-simple-google-maps', label: 'octane' },
  { name: 'ember-learn/ember-simple-leaflet-maps', label: 'octane' },
  { name: 'ember-learn/ember-styleguide', label: 'octane' },
  { name: 'ember-learn/ember-website', label: 'octane' },
  { name: 'ember-learn/emberjs-contributors-workshop', label: 'octane' },
  { name: 'ember-learn/gh-team-copy', label: 'octane' },
  { name: 'ember-learn/glimmer-styleguide', label: 'octane' },
  { name: 'ember-learn/glimmer-url-shortener', label: 'octane' },
  { name: 'ember-learn/guidemaker-ember-template', label: 'octane' },
  { name: 'ember-learn/guides-app', label: 'octane' },
  { name: 'ember-learn/guides-source', label: 'octane' },
  { name: 'ember-learn/handbook', label: 'octane' },
  { name: 'ember-learn/intro-to-ember-workshops', label: 'octane' },
  { name: 'ember-learn/mentorship-workshop', label: 'octane' },
  { name: 'ember-learn/super-rentals', label: 'octane' },
  { name: 'ember-learn/the-shortest-ember-book', label: 'octane' },
  { name: 'ember-learn/tomster-chatbot', label: 'octane' },
  { name: 'ember-learn/tutorial-quick-start', label: 'octane' },
  { name: 'ember-learn/tutorials', label: 'octane' },

  { name: 'emberjs/core-notes', label: 'octane' },
  { name: 'emberjs/data', label: 'octane' },
  { name: 'emberjs/ember', label: 'octane' },
  { name: 'emberjs/ember-2-legacy', label: 'octane' },
  { name: 'emberjs/ember-collection', label: 'octane' },
  { name: 'emberjs/ember-copy', label: 'octane' },
  { name: 'emberjs/ember-inflector', label: 'octane' },
  { name: 'emberjs/ember-inspector', label: 'octane' },
  { name: 'emberjs/ember-jquery', label: 'octane' },
  { name: 'emberjs/ember-jquery-legacy', label: 'octane' },
  { name: 'emberjs/ember-map-polyfill', label: 'octane' },
  { name: 'emberjs/ember-map-with-default', label: 'octane' },
  { name: 'emberjs/ember-mocha', label: 'octane' },
  { name: 'emberjs/ember-namespace', label: 'octane' },
  { name: 'emberjs/ember-optional-features', label: 'octane' },
  { name: 'emberjs/ember-ordered-set', label: 'octane' },
  { name: 'emberjs/ember-qunit', label: 'octane' },
  { name: 'emberjs/ember-rails', label: 'octane' },
  { name: 'emberjs/ember-record-extension', label: 'octane' },
  { name: 'emberjs/ember-render-modifiers', label: 'octane' },
  { name: 'emberjs/ember-string', label: 'octane' },
  { name: 'emberjs/ember-test-helpers', label: 'octane' },
  { name: 'emberjs/ember.js', label: 'octane' },
  { name: 'emberjs/eslint-plugin-ember-internal', label: 'octane' },
  { name: 'emberjs/rfc-tracking', label: 'octane' },
  { name: 'emberjs/rfcs', label: 'octane' },
  { name: 'emberjs/testem-failure-only-reporter', label: 'octane' },
  { name: 'emberjs/website', label: 'octane' },
  { name: 'emberjs/whiteboard', label: 'octane' },
];

const rfcs = [
  { name: 'emberjs/rfcs', label: 'Final Comment Period' },
  { name: 'emberjs/rfcs', label: 'Needs Champion' },
];

const mapGroupNameToRepositories = new Map([
  ['community', community],
  ['core', core],
  ['emberHelpWanted', emberHelpWanted],
  ['learning', learning],
  ['octane', octane],
  ['rfcs', rfcs],
]);

function getRepositories(groupName) {
  return mapGroupNameToRepositories.get(groupName);
}

module.exports = getRepositories;