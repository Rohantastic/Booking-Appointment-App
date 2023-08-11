const express = require('express');
const route = require('./routes/user');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',route);





app.listen(1234,()=>{
    console.log('Main Engine Connection Initiated...');
});