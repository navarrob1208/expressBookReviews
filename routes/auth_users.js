const auth = require("../middlewares/auth");
const books = require("../data/booksdb");
const express = require("express");
const router = express.Router();

router.post("/auth/review/:isbn", (req, res) => {
    var isbn = req.params.isbn;
    if(isbn){
        let bookFound = books

    }else{
        res.send({
            "success":false,
            "error":"invalid isbn"
        });
    }
});