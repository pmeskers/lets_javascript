var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.js');

function run() {
  ReactDOM.render(
    <App title='welcome.'/>,
    document.getElementById('app')
  );
}

if (document.readyState != 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
