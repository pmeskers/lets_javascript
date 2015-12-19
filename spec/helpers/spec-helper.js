require('./bind-polyfill.js');

let reactHelper = require('./react-helper.js');

beforeEach(function() {
  reactHelper.setup();
});

afterEach(function() {
  reactHelper.teardown();
});
