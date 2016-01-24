# Let's JavaScript

![CI Status](https://travis-ci.org/pmeskers/lets_javascript.svg?branch=master)

A quick-and-dirty personal scaffold for throwing together a single page web app. Given how often the JS landscape changes, this is like the third one of these I've made.

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

When using this scaffold, feel free to remove any tests from `spec/lib/` -- these are tests that test the scaffold behavior itself (such as the ReactHelper).

## Tools included

* [Webpack](https://github.com/webpack/webpack)
* [Babel](http://babeljs.io/)
* [Gulp](http://gulpjs.com)
* [eslint](http://eslint.org/)
* [Jasmine](http://jasmine.github.io/)
* [React](https://facebook.github.io/react/)

## ReactHelper

This scaffold includes a work-in-progress helper for testing React components using Jasmine. Once it is a little more mature, it should be pulled into a separate node module/repository. Here are some docs that will eventually move with it.

Requiring `spec/helpers/react-helper.js` provides you with a singleton `reactHelper` instance which can be used to render JSX into the DOM for testing, and can also replace components with mocked ones. 

```js
var reactHelper = require('../helpers/react-helper');
```

**render(jsx)**

Render a provided JSX element. Returns a reference to the rendered DOM node. 

```js
this.el = reactHelper.render(<h1>JSX!</h1>);
...
expect(this.el.textContent).toEqual('JSX!');
```

**mockComponent(Component)**

Any subequent rendering of the provided component will render a blank `div` instead of executing its real `render` function.

```js
ReactHelper.mockComponent(DummyComponent);
this.el = ReactHelper.render(
  <DummyComponent />
); // this will render an empty div
```

*Note: This differs from the React's Test Utilities `mockComponent` function by choosing not to render any children of mocked components.*

**setup()**

This function should be called before any other ReactHelper methods are. In this scaffold, it is done globally in `spec/helpers/spec_helper.js`.

**teardown()**

This function should be called after any tests have been run in order to clean up the DOM and restore any mocked components. In this scaffold, it is done globally in `spec/helpers/spec_helper.js`.


## Working on next

* Fix filename inconsistencies (- vs _, I guess?)
* Extracting ReactHelper into its own repo/node module
	* improving documentation
	* providing error messages when used incorrectly
	* its own test suite
* More complex examples
* Maybe a base CSS framework, but probably not (basscss?)
* Better console outputs for most tasks
* Investigate packaging src/spec files as node packages
