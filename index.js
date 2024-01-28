require('dotenv').config();

const express = require('express');
const session = require("express-session");
const customer_route = require("./routes/auth_users.js");
const genl_route = require("./routes/general.js");
const auth = require("./middlewares/auth.js");

const app = express();
app.use(express.urlencoded({
    extended:true
}));

app.use(session({
    secret:"fingerprint_customer",
    resave:true,
    saveUninitialized:true
}));

app.use("/customer/auth", auth);

const PORT = 5000;

app.use("/customer", customer_route);
app.use("/", genl_route);

app.use((req, res, next) => { 
    res.status(404).json({
        "success":false,
        "error": "not_found"
    });
});

app.listen(PORT, () => {
    console.log("Server is running");
});

