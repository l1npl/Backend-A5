const express = require('express');
const dontenv = require('dotenv');
//Route files
const hospitals = require('./routes/hospitals');

//Load env vars
dontenv.config({path:'./config/config.env'});

const app=express();

//Mount routers
app.use('/api/v1/hospitals',hospitals);

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV,' mode on port',PORT));