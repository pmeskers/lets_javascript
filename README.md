# Let's JavaScript 
## TypeScript, React, Redux

![CI Status](https://travis-ci.org/pmeskers/lets_javascript.svg?branch=typescript-react-redux)

A quick-and-dirty personal scaffold for throwing together a single page web app. Given how often the JS landscape changes, this is like the third one of these I've made.

For the original version, see [here](https://github.com/pmeskers/lets_javascript/)!

For the Angular 2 version, see [here](https://github.com/pmeskers/lets_javascript/tree/typescript-angular-2)!

# How to use

For now, just clone/download this repo, and start hacking away and adding whatever other libraries you want. 

```bash
# basic usage instructions

npm install
npm install -g gulp

gulp dev              # Serves compiled src/ content on port 8080
                      # Watches for JS/CSS/HTML changes, then rebuilds and reloads
gulp dev-no-reload    # Same as dev, but without livereloading

gulp lint             # Run tslint over all code
gulp jasmine          # Starts a Jasmine server on port 8888
gulp jasmine-phantom  # Runs all Jasmine tests headlessly

gulp                  # Runs default gulp tasks 'lint' and 'jasmine-phantom'

gulp dist             # Builds a production version of the application into 'dist/'
                      # Includes uglification/minification/no source maps.
```

## Tools included

* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://github.com/webpack/webpack)
* [Gulp](http://gulpjs.com)
* [tslint](https://github.com/palantir/tslint)
* [Jasmine](http://jasmine.github.io/)
* [React](https://facebook.github.io/react/)
* [Enzyme](https://github.com/airbnb/enzyme)
