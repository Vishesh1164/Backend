const { Schema, model } = require('../connection')

const mySchema = new Schema({
    product_name: String,
    catagory: {type: String, unique: true},
    brand: {type: String, required: true},
    colour: {type: String, default: 'Unknown'},
    price: {type: Number,required: true},
    createdAt: {type: Date, default: Date.now()}
})

module.exports = model('products', mySchema)