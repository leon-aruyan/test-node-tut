const {readFile, writeFile} = require('fs');

//run callback when we are done
//like addeventlistener
//callback function runs everything we click on the button

console.log('Start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result);//Here, we will set up our functionality
    //the only way to have access to the result is inside this function
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        /*{flag: 'a'}*/
        (err, result) => {
            if (err){
                console.log(err);
                return;
            }
            //console.log(result);
            console.log('Done with this task');
        }
        );
        
    });
});
console.log('------>>>Starting next task');
//Undefined is fine, because we're not expecting anything back
 
