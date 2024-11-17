const express = require('express');
const Model = require('../models/UserModel');
const router = express.Router();

router.post('/add',(req, res)=>{

    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });



})

router.get('/getbycity/:city',(req, res)=>{
    Model.find({ city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.get('/getbyid/:id',(req, res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });

})

router.get('/getall',(req, res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });

})

router.get('/delete',(req, res)=>{
    res.send('Adding a new product');

})

module.exports = router;