// Impoorting express 
const express = require('express');
const userRouter = require('./routers/userRouter');

// Creating n express app

const app = express();

const port =5000;

//middleware

app.use('/user', userRouter);

//route or endpoint
app.get('/', (req, res) => {
    res.send('response from express')
})





// stating the server

app.listen(port, ()=>{console.log('Server started')})
