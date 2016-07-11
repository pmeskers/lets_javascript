function run() {
  document.querySelector('body').innerHTML = 'oh wowwww';
}

if (document.readyState != 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
