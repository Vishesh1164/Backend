const express = require('express');

const router = express.Router();

router.get('/add',(req, res)=>{
    res.send('Adding a new product');

})

module.exports = router;