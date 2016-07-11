import { Cat } from './cat.ts';

function run() {
  var cat = new Cat();
  document.querySelector('body').innerHTML += 'oh wowwww ' + cat.getMeow();
}

if (document.readyState != 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
