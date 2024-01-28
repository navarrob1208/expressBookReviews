const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

const books = require("../data/booksdb");
const users = require("../data/users");

router.get("/", (req, res, next) => {
    if(books && books.length > 0){
        res.send({
            "success":true,
            "result": books,
            "error": ""
        });
    }else{
        res.send({
            "success":false,
            "result": [],
            "error":"unable to retrieve the books"
        });
    }
});

router.get("/isbn/:isbn", (req, res, next) => {
    let isbn = req.params.isbn;
    let bookFound = books.find((book) => book.ISBN == isbn);
    
    if(bookFound){
        res.send({
            "success":true,
            "result": [bookFound],
            "error":""
        });
    }else {
        res.send({
            "success":false,
            "result": [],
            "error":"could not find the book"
        });
    }
});

router.get("/author/:author", (req, res, next) => {
    let author = req.params.author;
    let booksFound = books.filter((book) => book.authorName === author);

    if(booksFound && booksFound.length > 0){
        res.send({
            "success":true,
            "result": booksFound,
            "error":""
        });
    }else{
        res.send({
            "success":false,
            "result": [],
            "error":"could not find the books"
        });
    }

});

router.get("/title/:title", (req, res, next) => {
    let title = req.params.title;
    let bookFound = books.find((book) => book.bookName === title);

    if(bookFound){
        res.send({
            "success":true,
            "result": [bookFound],
            "error":""
        });
    
    }else {
        res.send({
            "success":false,
            "result": [],
            "error":"could not find the book"
        });
    }
});

router.get("/review/:isbn", (req, res, next) => {
    let isbn = req.params.isbn;
    let bookFound = books.find((book) => book.ISBN === isbn);

    if(bookFound){
        res.send({
            "success":true,
            "result": {
                "title":bookFound.bookName,
                "reviews": bookFound.reviews
            },
            "error":""
        });
    
    }else {
        res.send({
            "success":false,
            "result": [],
            "error":"could not find the book"
        });
    }
});

router.post("/register", (req, res, next) => {
    const {username, password} = req.body;

    if(!username){
        res.send({
            "success":false,
            "error":"invalid username"
        });
    }else if(!password){
        res.send({
            "success":false,
            "error":"invalid password"
        });
    }else {
        let userFound = users.find((user) => user.username === username);
        if(userFound){
            res.send({
                "success":false,
                "error":"username already exists"
            });
        }else{
            res.send({
                "success":true,
                "error":""
            });
        }
    }
});


router.post("/login", (req, res, next) => {
    const {username, password} = req.body;

    if(!username){
        res.send({
            "success":false,
            "error":"invalid username"
        });
    }else if(!password){
        res.send({
            "success":false,
            "error":"invalid password"
        });
    }else {
        let userFound = users.find((user) => user.username === username);
        if(userFound){
            if(userFound.password === password){
                const token = jwt.sign({ 
                    user: userFound.username
                }, process.env.JWT_SECRET, { 
                    expiresIn:'12h' 
                });

                req.session.authorization = {
                    token, username
                }
                
                return res.status(200).json({
                    "success":true,
                    "result":[],
                    "token": token,
                    "error":""
                });
            
            }else {
                res.send({
                    "success":false,
                    "error":"invalid password"
                });
            }

        }else{
            res.send({
                "success":false,
                "error":"user not found"
            });
        }
    }
});

module.exports = router; 