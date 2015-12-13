class App {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log('Running ' + this.name + '...'); //eslint-disable-line no-console
  }
}

module.exports = App;
