# Let's JavaScript

A quick-and-dirty personal scaffold for throwing together a single
page web app. Given how often the JS landscape changes, this is
like the third one of these I've made.

## How to use

For now, just clone/download this repo, and start hacking away and
adding whatever other libraries you want. 

```bash
# put steps here for how to use this scaffold

npm install
npm install -g gulp   # Do we need this?

gulp dev              # Watches for JS changes and rebuilds 

eslint src/index.js   # Runs linter against JS
```

## Tools included

* [Webpack](https://github.com/webpack/webpack)
* [Babel](http://babeljs.io/)
* [Gulp](http://gulpjs.com)
* [eslint](http://eslint.org/)

## Working on next

* eslint task for gulp
* adding Jasmine for tests (including gulp task)
* SCSS auto-compilation
* HTML/build step
* Web server
* Gulp task to keep all the things running during dev
* Gulp task to run linter and specs
