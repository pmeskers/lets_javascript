require('./bind-polyfill.js');

var reactHelper = require('./react-helper.js');

beforeEach(function() {
  reactHelper.setup();
});

afterEach(function() {
  reactHelper.teardown();
});
