const express = require('express');
const app = express();
const fs = require('fs');

const port = 8080;
const server = app.listen(port,()=>{
    const host = server.address().address
    const port = server.address().port
    console.log(`server has runing at http://${host}:${port}`);
})