const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}, ()=>{
    console.log('connected to DB')
})

app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 *1000,
        keys:[process.env.COOKIE]
    })
)

app.use(passport.initialize());
app.use(passport.session())

require('./services/passport.js')
require('./routes/authRoute.js')(app)









app.listen(process.env.PORT,()=> console.log("working"))