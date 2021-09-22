const express = require("express");
const app = express();
var cors = require("cors");
const loginApiRouter = require('./routers/user/loign')
const signUpApiRouter = require('./routers/user/sign-up')


const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
console.log("checking the routes");
app.use('/login',loginApiRouter)
app.use('/signup',signUpApiRouter)



app.listen(8000, () => console.log("Listening to the port 8000..."));