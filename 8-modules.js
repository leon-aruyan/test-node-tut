//assign it to a variable or just require
//parameter, where the module is located, where is this data come
//Always start with '.' because we can have Third party modules and built-in modules
const names = require('./4-names');
const sayHi = require('./5-utils');
//console.log(names);
const data = require('./6-alternative-flavor');
//console.log(data);
// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);

require('./7-mind-grenade'); //it ran the function we invoke in 7-mind-grenade


const os = require('os');
// const {especifics} = require('x');// is a valid sintax

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
//With template string
//interpolation
console.log(`The System Uptime is ${os.uptime()} seconds`);

//
const currentOS = {
    name:os.type(), 
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);





