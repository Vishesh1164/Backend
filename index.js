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

app.get('/add', (req, res) => {
    res.send('response from add')
}
)

app.get('/getall', (req, res) => {
    res.send('response from getall')
    })

app.get('/delete', (req, res) => {
    res.send('response from delete')
    
})

app.get('/update', (req, res) => {
    res.send('response from update')
    
})

app.get('/getbyid', (req, res) => {
    res.send('response from getbyid')
    
})



// stating the server

app.listen(port, ()=>{console.log('Server started')})
