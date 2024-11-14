const { Schema, model } = require('../connection')

const mySchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()}
})

model.exports = model('users', mySchema)