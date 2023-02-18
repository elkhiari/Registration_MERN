const express = require("express");
const ConnectTODB = require("../db/database");
var cors = require('cors')
const app = express()
const AddUser = require('../routes/inscription.route')

require("dotenv").config()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{res.send("WOrkin")})


app.use('/api/v1',AddUser)

const DataBase = async (PORT,URI) =>{
    try {
        await ConnectTODB(URI)
        console.log("DB is Working..")
        app.listen(PORT,console.log(`App is Working on port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

DataBase(process.env.PORT,process.env.URI)