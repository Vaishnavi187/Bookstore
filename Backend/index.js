require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const router = require('./route/bookroute');
const cors = require('cors');
const Router = require('./route/userroute');
 const routter = require('./route/contactroute');

const app = express()
app.use(cors())

const PORT=process.env.PORT|| 4001
const URL=process.env.URI
//connect to mongodb
try {
    mongoose.connect(URL)
    console.log("connceted to mongodb");
    
} catch (error) {
    console.log(error );
    process.exit(1);
    
}
app.use(express.json())
app.use("/book",router)
app.use("/user",Router)
app.use("/cont",routter)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})