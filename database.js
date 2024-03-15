const mongoose = require("mongoose")

const mongodb = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Data base is connected :${connect.connection.host}`)

}
module.exports = mongodb