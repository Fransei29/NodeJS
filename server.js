// ----- Creating our first HTTP Server ----- (http://127.0.0.1:3000/)

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const newFrancoServer = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Welcome to my first server!')
});

newFrancoServer.listen(port, hostname, () => {
  console.log(`Franco´s server is running at http://${hostname}:${port}/`)
});


// --- Performing a GET request (to get data from the server)

const https = require('https')

// const options = {
//   hostname: 'dog.ceo',
//   port: 443,
//   path: '/api/breeds/list/all',
//   method: 'GET',
// }

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', (d) => {
//     process.stdout.write(d)
//     //note: we use process.stdout.write() here, and not console.log(), because we are receiving binary data from a stream, in chunks, and we stream each chunk to `stdout`, so the user (you) can see it.
//   })
// })

// req.on('error', (error) => {
//   console.error(error)
// })

// req.end()

// --- Performing a POST request ( sends data to the server)

const data = JSON.stringify({
    todo: 'Buy the milk',
  })
  
  const options = {
    hostname: 'ptsv2.com',
    port: 443,
    path: '/t/wdv29-1621319997/post',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  }
  
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', (error) => {
    console.error(error)
  })
  
  req.write(data)
  req.end()


  // ---AXIOS
// const axios = require('axios')

// axios
//   .post('https://ptsv2.com/t/wdv29-1621319997/post', {
//     todo: 'Buy the milk',
//   })
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res.data)
//   })
//   .catch((error) => {
//     console.error(error.message)
//   })