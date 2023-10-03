const express = require('express');
const cors = require('cors');
const exec = require('child_process').exec;
const app = express();
const PORT = 5000;


app.use(express.json());
app.use(cors())

var python_process;

app.get('/start', function(req, res) {
    exec('sudo python3 LEDMatrix.py', (err, stdout)=>{
        
    })
    res.send("START PYTHON FILE")
});

app.get('/start_motor', function(req, res) {
    exec('sudo pkill -9 -f  serial-link-close.py', (err, stdout)=>{
        exec('sudo python3 serial-link-open.py', (err, stdout)=>{
        
        })
    })
    res.send("START PYTHON FILE")
});

app.get('/stop_motor', function(req, res) {
    exec('sudo pkill -9 -f  serial-link-open.py', (err, stdout)=>{
        exec('sudo python3 serial-link-close.py', (err, stdout)=>{
        
        })
    })
    res.send("START PYTHON FILE")
});

app.get('/stop', function(req, res) {
    exec('sudo pkill -9 -f  LEDMatrix.py', (err, stdout)=>{
        
    })
    res.send("STOP PYTHON FILE")
});

app.listen(PORT, ()=>{
    console.log('Connect successfully at http://localhost:3000');
})
