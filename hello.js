// --- First Node Code ---
console.log("Hello world!");

// --- Using npm (libraries) we gonna require the Date´s module ---
const datefns = require('date-fns')

// --- Then we gonna use one of them funcionality --- 
console.log(datefns.format(new Date(2021, 1, 11), 'yyyy-MM-dd'))

// --- Time to start interacting with our filesystem using 'fs','path' and 'os'  ---
//  (As before, we first require the module, and then we use it. In this case, we are using the funcionality to change the name of our fs)

// ---Requiring fs
const fs = require('fs');

// fs.rename('index.html', 'indexx.html', (err) => {
//   if (err) {
//     return console.error(err)
//   }
// });

// --- Requiring path 
const path = require('path');

// --- Checking if a path is absolute --- 
// (first we declare a const with the path we want to check and then using one funcionality of 'path' for it)

const rutaAbsoluta = 'C:\\WORK\\module51'

console.log("is this path absolute? " + path.isAbsolute(rutaAbsoluta));

// --- Checking the absolute path calculation
console.log("the absolute path is " + path.resolve('module51'));

// ---Now, using 'os' we gonna interact with the operating system and use of them funcionality to check inforation
const os = require('os')

console.log("the underlying architecture is " + os.arch());
console.log("the home directory is " + os.homedir());
console.log("the total of seconds are " + os.uptime());
console.log("the temp folder is " + os.tmpdir());



// ---Let's read a directory and then a file

// reading a directory
fs.readdir('C:\\WORK\\module51', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

    console.log("the files in this directory are " + files);
  });

// reding a file
fs.readFile('indexx.html', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString()); 
});


// ---Let´s write a file

const content = "I am writing this";

fs.writeFile('indexx.html', content,{ flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

// ---Let´s append content to a file
const newContent = "I am appending this";

fs.appendFile('indexx.html', newContent, (err) => {
  if (err) {
    console.error(err)
    return
  }
});


// ---Checking File details

fs.stat('C:\\WORK\\module51', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

 console.log("is this a file? " + stats.isFile());
 console.log("is this a directory? " + stats.isDirectory());
});


