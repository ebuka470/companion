self.addEventListener('install', e => {
  console.log('Companion installed');
});

self.addEventListener('fetch', e => {
  // Let browser handle network requests
});