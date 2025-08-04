const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/db')
const userRoute = require('./Routes/user.routes')
const cookieParser = require('cookie-parser')
const captionroutes = require('./Routes/caption.route')


connectDB()
//middelwares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


// apis end points with middelware
app.use('/user', userRoute)
app.use('/caption',captionroutes)




app.get('/',(req,res)=>{
res.send({"message":'HA HA STARTA'})
})




module.exports = app