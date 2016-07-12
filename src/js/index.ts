import 'reflect-metadata';
import 'zone.js';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { App } from 'app.component';

let run = () => {
  bootstrap(App);
};

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
