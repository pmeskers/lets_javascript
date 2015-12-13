var App = require('../../src/js/app.js');

describe('App', function() {
  beforeEach(function() {
    this.app = new App('Testable App');
  });

  describe('#run', function() {
    beforeEach(function() {
      spyOn(console, 'log');
    });

    it('logs a message with the app name', function() {
      this.app.run();
      expect(console.log).toHaveBeenCalledWith('Running Testable App...'); //eslint-disable-line no-console
    });
  });
});
