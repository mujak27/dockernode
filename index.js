const express = require('express');

const app = express();
const port = 8080;

app.get('*', (req, res)=>{
    res.send('helloa');
})

app.listen(port, ()=>{
    console.log('server runninga');
})
