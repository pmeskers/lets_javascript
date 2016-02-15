require('./bind-polyfill.js');

var reactHelper = require('jasmine-react-helper');

beforeEach(function() {
  reactHelper.setup();
});

afterEach(function() {
  reactHelper.teardown();
});
