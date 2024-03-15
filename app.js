require("dotenv").config()
const express = require('express')
const app = express()
const dataSchema = require("./dataSchema")
const mongodbdatabase = require('./database')


const port = process.env.PORT || 9000

app.use(express.json({}))

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "you are online on the aws server"
//     })
// })

app.get("/", (req, res) => {

    dataSchema.find().then(users => res.json(users)).catch(err => res.json(err))

})

mongodbdatabase()

app.post("/postbodydata", async (req, res) => {
    const { firstname, lastname, phoneNumber, email, department } = req.body


    const user = new dataSchema()
    user.firstname = firstname
    user.lastname = lastname
    user.phonenumber = phoneNumber
    user.email = email
    user.department = department

    await user.save()

    res.status(200).json({
        messages: "Done! Every thin is fine "
    })
})



// server is created
app.listen(port, () => {
    console.log(`Server is activate on port ${port}`)
})
