class App {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log("Running " + this.name + "...");
  }
}

module.exports = App;
