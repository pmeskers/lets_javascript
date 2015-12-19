let React = require('react');
let ReactDOM = require('react-dom');

let App = require('./app.js');

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
