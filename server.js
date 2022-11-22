const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const app = express()
const port = 8000

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            minLength: 5
        }
    },
    {
        timestamps: true
    })
const User = mongoose.model('User', userSchema)

app.get('/user', (req, res) =>{
    let newUser = new User
    newUser.username = 'test'
    res.status(202)
    res.send(newUser)

})

app.get('/', (req, res) => {
    res.send('Fine')
})

app.listen(port, () => {
    console.log(`OK running at ${port}`)
})