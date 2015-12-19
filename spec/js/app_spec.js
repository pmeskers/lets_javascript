var ReactDOM = require('react-dom');
var React = require('react');

var App = require('../../src/js/app.js');

describe('App', function() {
  beforeEach(function() {
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'specHelper');
    document.body.appendChild(this.el);

    ReactDOM.render(
      <App title="It's alive!"/>,
      this.el
    );
  });

  afterEach(function() {
    document.body.removeChild(this.el);
  });

  describe('render', function() {
    it('displays the provided title', function() {
      expect(this.el.textContent).toEqual('It\'s alive!');
    });
  });
});
