var React = require('react');

class App extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
};

module.exports = App;
