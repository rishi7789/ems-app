const express = require("express")
const router = require('./controller/auth-router')
const emprouter = require('./controller/emp-router')
require('dotenv').config()
const port = process.env.PORT || 5000;
const connectDB = require('./database/connectdb')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

connectDB();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", router)
app.use("/", emprouter)


app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
