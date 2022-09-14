const express = require('express')
const app = express()
const mongoose = require('mongoose')
//passport handles authentication and strategies, you use google auth, twitter authentication etc. etc. you can use these strategies for different sets of problems
const passport = require('passport')
//allows users to stay in session and stay logged in using a cookie that matches session stored in our database
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
//flash error messages coming out for invalid user sign in stuff for verification
const flash = require('express-flash')
//Morgan is simple logger debugger
const logger = require('morgan')
//require database stuff
const connectDB = require('./config/database')
//linking routes in our other classses
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

//tell express to use environment variables which is not built into node for some reason

require('dotenv').config({path: './config/.env'})

// Passport config
//tells app to use passport
require('./config/passport')(passport)

//function to call DB
connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
//look at stuff in requests and allows to pull them out of those requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//this is for Morgan to allow us to log
app.use(logger('dev'))
// Sessions
//sessions secret etc.
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//setup flash alerts
app.use(flash())
  
//start using routes
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    