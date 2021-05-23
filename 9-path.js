const path = require('path');

//separator property, for different platforms
console.log(path.sep);

//Join parts of a path and return a normalized resulting path
//It removes extra separators
const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//for absolute path provider
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
console.log(absolute);