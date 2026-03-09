const https = require('https');

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ae/ESPN_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8c/SporTV_logo_2021.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f3/Premiere_logo_2021.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1b/TNT_Sports_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TNT_Sports_logo.svg/1024px-TNT_Sports_logo.svg.png'
];

urls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
