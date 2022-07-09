const express = require('express');
const {readFile} = require('fs');
const app = express();

app.get('/foo/m', (request,response)=>{
    readFile('./home.html','utf-8',(err,txt)=>{
        if(err){
            response.status(500).send('Sorry server is trash');
        }
        response.send(txt)
    })
});

app.listen(process.env.PORT || 3000, ()=>{console.log('App running on http://localhost:3000')})






// const myModule = require('./my-module.js');

// console.log(myModule);






// const {readFile} = require('fs').promises;

// async function readTextFile(){
//     const txt = await readFile('./hello.txt','utf-8');
//     console.log(txt);
//     console.log('random thing');
// }

// readTextFile();





// const { readFile, readFileSync } = require('fs');

// readFile('./hello.txt','utf-8', (err,tinput)=>{
//     if(err){
//         console.log('An error occured');
//     } else {
//         console.log(tinput);
//     }
// });

// console.log('random thing');





// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter()

// eventEmitter.on('wake', ()=>{
//     console.log("GM M");
// })

// eventEmitter.emit('wake')





// console.log('Hi M!👋');
// console.log(global.luckyNum);
// global.luckyNum = 8;
// console.log(global.luckyNum);
// console.log(process.platform);
// console.log(process.env.USER);