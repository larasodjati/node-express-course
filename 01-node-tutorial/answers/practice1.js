//write sentence variable from the practice2
const sentence = require('./practice2');
console.log('start')
//require os module
const os = require('os');
const user = os.userInfo().username;

// require fs module and create practice.txt file with async
const{writeFile} = require('fs');
writeFile(
    './content/practice.txt', sentence, 'utf-8', (err)=>{
    if (err){
        console.log(err);
        return;
    }  
    console.log(sentence);  
});

writeFile(
    './content/practice.txt', user, 'utf-8', (err) =>{
        if (err){
            console.log(err);
            return
        }
        console.log(user);
    }
);
console.log('end')