import 'reflect-metadata';
import 'zone.js';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Cat } from './components/cat.component.ts';

let run = () => {
  bootstrap(Cat);
};

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
