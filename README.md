# Let's JavaScript

A quick-and-dirty personal scaffold for throwing together a single
page web app. Given how often the JS landscape changes, this is
like the third one of these I've made.

# How to use

For now, just clone/download this repo, and start hacking away and
adding whatever other libraries you want. 

```bash
# put steps here for how to use this scaffold

npm install
npm install -g gulp

gulp dev              # Serves compiled src/ content on port 8080
                      # Watches for JS/CSS/HTML changes, then rebuilds and reloads
gulp dev-no-reload    # Same as dev, but without livereloading

gulp lint             # Run eslint over all code
gulp jasmine          # Starts a Jasmine server on port 8888
gulp jasmine-phantom  # Runs all Jasmine tests headlessly

gulp                  # Runs default gulp tasks 'lint' and 'jasmine-phantom'
```

When using this scaffold, feel free to remove any tests from `spec/lib/` -- these are tests
that test the scaffold behavior itself (such as the ReactHelper).

## Tools included

* [Webpack](https://github.com/webpack/webpack)
* [Babel](http://babeljs.io/)
* [Gulp](http://gulpjs.com)
* [eslint](http://eslint.org/)
* [Jasmine](http://jasmine.github.io/)
* [React](https://facebook.github.io/react/)

## Working on next

* Spec helpers for React component tests
    * ~~Rendering~~
    * ~~Mocking~~
    * Basic docs on how to use
* Fix filename inconsistencies (- vs _, I guess?)
* More complex examples
* Create deploy tasks (minifying, uglifying, CF manifest?)
* Maybe a base CSS framework, but probably not (basscss?)
* Better console outputs for most tasks
* Investigate packaging src/spec files as node packages
