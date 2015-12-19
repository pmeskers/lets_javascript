var ReactDOM = require('react-dom');

class ReactHelper {
  setup() {
    this._el = document.createElement('div');
    this._el.setAttribute('id', 'specHelper');
    document.body.appendChild(this._el);
  }

  teardown() {
    document.body.removeChild(this._el);
  }

  render(jsx) {
    ReactDOM.render(
      jsx,
      this._el
    );
    return this._el;
  }
}

module.exports = new ReactHelper();
