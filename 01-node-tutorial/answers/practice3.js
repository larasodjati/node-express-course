//create async function that return promises
const fs = require('fs').promises;
async function makeFile(){
//use await to get the results of each call 
try{
    await fs.writeFile('./content/practice2.txt', 'This is the first line\n' )   
//write a loop so it can be replicate up to 10
    for(let i = 2; i <= 10; i++){
        console.log(`This is line ${i}`);

    await fs.writeFile('./content/practice2.txt', 
    `This is line ${i}\n`,{encoding: 'utf-8', flag: 'a'})
    }    
}catch(err){
        console.log('Error: ' + err + '.');
    }
}
//call the function
makeFile();
console.log('finished')