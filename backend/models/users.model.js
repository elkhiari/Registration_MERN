const mongoose = require('mongoose')


const users = new mongoose.Schema({
    firstName:{
        type:String,
        required:[1,"firstName:0"]
    },
    lastName:{
        type:String,
        required:[1,'lastName:0']
    },
    cnie:{
        type:String,
        unique:true,
        required:[1,'cnie:0']
    },
    phone:{
        type:String,
        required:[1,'phone:0']
    },
    email:{
        type:String,
        unique:true,
        required:[1,'email:0']
    },
    adress:{
        type:String,
        required:[1,'adress:0']
    },
    Profile:{
        type:String
    },
    emailValid:{
        type:Boolean,
        default:0
    },
    accountValid:{
        type:Boolean,
        default:0
    },
    date:{
        type:Date,
        default:new Date
    }
})

module.exports = mongoose.model('users',users)