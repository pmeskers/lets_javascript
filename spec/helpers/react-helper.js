var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

class ReactHelper {
  setup() {
    this._el = document.createElement('div');
    this._el.setAttribute('id', 'specHelper');
    document.body.appendChild(this._el);

    this._mockedComponents = {};
  }

  teardown() {
    document.body.removeChild(this._el);

    _.each(this._mockedComponents, function(mock) {
      mock.component.prototype.render = mock.renderFn;
    });
  }

  render(jsx) {
    ReactDOM.render(
      jsx,
      this._el
    );
    return this._el.firstChild;
  }

  mockComponent(component) {
    this._mockedComponents[component.name] = {
      component: component,
      renderFn: component.prototype.render
    };

    component.prototype.render = function mockRender() {
      return (<div/>);
    };
  }
}

module.exports = new ReactHelper();
