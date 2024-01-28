const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

const books = require("../data/booksdb");
const users = require("../data/users");

router.get("/", (req, res, next) => {
    if(books && books.length > 0){
        res.status(200).json({
            "success":true,
            "result": books,
            "error": ""
        });
    }else{
        res.status(500).json({
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
        res.status(200).json({
            "success":true,
            "result": [bookFound],
            "error":""
        });
    }else {
        res.status(400).json({
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
        res.status(200).json({
            "success":true,
            "result": booksFound,
            "error":""
        });
    }else{
        res.status(400).json({
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
        res.status(200).json({
            "success":true,
            "result": [bookFound],
            "error":""
        });
    
    }else {
        res.status(400).json({
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
        res.status(200).json({
            "success":true,
            "result": {
                "title":bookFound.bookName,
                "reviews": bookFound.reviews
            },
            "error":""
        });
    
    }else {
        res.status(400).json({
            "success":false,
            "result": [],
            "error":"could not find the book"
        });
    }
});

router.post("/register", (req, res, next) => {
    const {username, password} = req.body;

    if(!username){
        res.status(400).json({
            "success":false,
            "error":"invalid username"
        });
    }else if(!password){
        res.status(400).json({
            "success":false,
            "error":"invalid password"
        });
    }else {
        let userFound = users.find((user) => user.username === username);
        if(userFound){
            res.status(400).json({
                "success":false,
                "error":"username already exists"
            });
        }else{
            users.push({
                "username": username,
                "password": password
            });
            res.status(200).json({
                "success":true,
                "error":""
            });
        }
    }
});

module.exports = router; 