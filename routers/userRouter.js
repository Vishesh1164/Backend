const express = require('express');

const router = express.Router();

router.post('/add',(req, res)=>{
    console.log(req.body);
    res.send('Adding a new product');

})

router.get('/getbyid',(req, res)=>{
    res.send('Adding a new product');

})

router.get('/getall',(req, res)=>{
    res.send('Adding a new product');

})

router.get('/delete',(req, res)=>{
    res.send('Adding a new product');

})

module.exports = router;