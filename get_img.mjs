import https from 'https';

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/w/api.php?action=query&prop=imageinfo&iiprop=url&titles=File:Mohamed%20Abdullahi%20Mohamed%20Farmajo.jpg&iiurlwidth=640&format=json',
  method: 'GET',
  headers: {
    'User-Agent': 'MyTestApp/1.0'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
