require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const session = require("express-session");
//const customer_route = require("./routes/auth_users.js");
const genl_route = require("./routes/general.js");

const app = express();
app.use(express.urlencoded({
    extended:true
}));

app.use("/customer", session({
    secret:"fingerprint_customer",
    resave:true,
    saveUninitialized:true
}));

const PORT = 5000;

//app.use("/customer", customer_route);
app.use("/", genl_route);

app.listen(PORT, () => {
    console.log("Server is running");
});