//----- Exercise No. 2: Globals --------
console.log("Mi dir name: "+__dirname);
//----- Exercise No. 3 --------
setInterval(()=>{
    console.log('Hello world');
}, 1000); */
//----- Exercise No. 4: modules --------
const john = 'john';
const peter = 'peter';

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi('Susan');
sayHi(john);
sayHi(peter);