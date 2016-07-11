// Angular dependencies
import 'reflect-metadata';
import 'zone.js';

// Needed for phantomJS
import 'core-js';

// Angular browser-based rendering helpers
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';
import { setBaseTestProviders } from '@angular/core/testing';

setBaseTestProviders(
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

// Prepare TestComponentBuilder
import { 
  addProviders, 
  TestComponentBuilder,
  inject,
} from '@angular/core/testing';

beforeEach(function() {
  addProviders([TestComponentBuilder]);
});

beforeEach(function() {
  inject([TestComponentBuilder], function(tcb) {
    this.componentBuilder = tcb;
  }.bind(this))();
});
