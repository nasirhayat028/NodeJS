console.log('Nasir ');

const fs = require('fs')

fs.writeFile("output.txt", 'Hello WOrld', (err) => {
    if (err) console.log('Error in FIle')
        else console.log('File run sucessfully');
        
    
})