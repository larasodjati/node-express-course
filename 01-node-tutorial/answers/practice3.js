fs = require('fs').promises;
const{writeFile} = require('fs');
const makeFile = async() => {
    
    try{
        await writeFile('./content/practice2.txt',
        'This is the first line', (err) =>{
            if(err){
                console.log(err)
            }
            return;
            

        });
        let counter = 2;
        while(counter <= 10){
        console.log(counter);
        counter++;
    }
        await writeFile('./content/practice2.txt',
        `This is line ${counter}`, {flag :'a'}, (err) => {
            if(err){
                console.log(err);
            }
            return;    
        });

    }catch(err){
        console.log(err.message);
    }
}
makeFile();
console.log('finished')