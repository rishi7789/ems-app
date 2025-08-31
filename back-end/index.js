
const express = require("express")
const app = express();
const router = require('./src/controller/auth-router')
const emprouter = require('./src/controller/emp-router')
const port = process.env.PORT || 5000;
const connectDB = require('./src/database/connectdb')
const cors = require('cors');
const bodyParser = require('body-parser');

connectDB();

//middlewares
app.use(cors()); //frontend and backend often run on different hosts/domain so Without CORS, the browser blocks the request with an error, Adding cors middleware to your Express app resolves this issue
//app.use(bodyParser.json()); //Parses request bodies in JSON format....for post,put,delete
app.use(express.json()) //same as above, now bodyparser is not used, Parses request bodies in JSON format....for post,put,delete
app.use(express.urlencoded({ extended: false }))

//Note- express.json() will parse the body from post/put request except from html post form and express.urlencoded({ extended: false }) will parse body from post/put request of html forms

//controllers
app.use("/", router)
app.use("/", emprouter)

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
