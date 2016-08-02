# Let's JavaScript

![CI Status](https://travis-ci.org/pmeskers/lets_javascript.svg?branch=master)

A quick-and-dirty personal scaffold for throwing together a single page web app. Given how often the JS landscape changes, this is like the third one of these I've made.

For the Angular 2 version, see [here](https://github.com/pmeskers/lets_javascript/tree/typescript-angular-2)!

For the Typescript & Redux version, see [here](https://github.com/pmeskers/lets_javascript/tree/typescript-react-redux).
It's likely that this will be the next "default" version of this scaffold.

# How to use

For now, just clone/download this repo, and start hacking away and adding whatever other libraries you want. 

```bash
# basic usage instructions

npm install
npm install -g gulp

gulp dev              # Serves compiled src/ content on port 8080
                      # Watches for JS/CSS/HTML changes, then rebuilds and reloads
gulp dev-no-reload    # Same as dev, but without livereloading

gulp lint             # Run eslint over all code
gulp jasmine          # Starts a Jasmine server on port 8888
gulp jasmine-phantom  # Runs all Jasmine tests headlessly

gulp                  # Runs default gulp tasks 'lint' and 'jasmine-phantom'

gulp dist             # Builds a production version of the application into 'dist/'
                      # Includes uglification/minification/no source maps.
```

## Tools included

* [Webpack](https://github.com/webpack/webpack)
* [Babel](http://babeljs.io/)
* [Gulp](http://gulpjs.com)
* [eslint](http://eslint.org/)
* [Jasmine](http://jasmine.github.io/)
* [React](https://facebook.github.io/react/)

## ReactHelper

This scaffold uses a work-in-progress helper for testing React components using Jasmine. You can see its progress and learn more about it [here](https://github.com/pmeskers/jasmine-react-helper).

## Working on next

* Consider replacing ReactHelper with enzyme
* More complex examples
* Maybe a base CSS framework, but probably not (basscss?)
* Better console outputs for most tasks
