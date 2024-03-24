const {mongoURL} = require("./key");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
port = 5000;

app.use(cors())

require('./Models/Model')
require('./Models/Post')
app.use(express.json())
app.use(require('./Routes/Auth'))
app.use(require('./Routes/createPost'))

mongoose.connect(mongoURL)

app.listen(port,()=>{
    console.log("server is running at port:"+port);
});


require("./Models/Model")
mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to the server")
})


mongoose.connection.on("error",()=>{
    console.log("Not connected to the server")
})