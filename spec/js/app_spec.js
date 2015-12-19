var React = require('react');
var ReactHelper = require('../helpers/react-helper');

var App = require('../../src/js/app.js');

describe('App', function() {
  beforeEach(function() {
    this.el = ReactHelper.render(
      <App title="It's alive!"/>
    );
  });

  describe('render', function() {
    it('displays the provided title', function() {
      expect(this.el.textContent).toEqual('It\'s alive!');
    });
  });
});
