const mongoose = require('mongoose')

mongoose.set("strictQuery",false)

const ConnectTODB = async (URI) => {
    mongoose.connect(URI)
}

module.exports = ConnectTODB

