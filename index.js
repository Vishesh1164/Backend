// Impoorting express 
const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const cors = require('cors');

// Creating n express app

const app = express();

const port =5000;

//middleware
app.use(cors({
    origin:  ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);

//route or endpoint
app.get('/', (req, res) => {
    res.send('response from express')
})





// stating the server

app.listen(port, ()=>{console.log('Server started')})
