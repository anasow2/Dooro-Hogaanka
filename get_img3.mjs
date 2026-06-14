import https from 'https';

const options = {
  hostname: 'commons.wikimedia.org',
  port: 443,
  path: '/w/api.php?action=query&list=search&srsearch=Said%20Abdullahi%20Deni&utf8=&format=json&srnamespace=6&srlimit=10',
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
