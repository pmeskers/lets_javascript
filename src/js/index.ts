import 'reflect-metadata';
import 'zone.js';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { CatComponent } from './cat.component.ts';
import { Cat } from './cat.ts';

let run = () => {
  let cat = new Cat();
  document.querySelector('body').innerHTML += 'oh wowwww ' + cat.getMeow();
  bootstrap(CatComponent);
};

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
