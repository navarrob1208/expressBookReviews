const auth = require("../middlewares/auth");
const books = require("../data/booksdb");
const express = require("express");
const router = express.Router();

router.post("/auth/review/:isbn", (req, res) => {
    var isbn = req.params.isbn;
    var newReview = req.body.review;

    if(isbn && newReview){
        var session = {} //To be implemented
        let bookFound = books.filter((book) => book.ISBN === isbn);
        let reviews = bookFound.reviews.filter((review) => reviewer == session.username);
        
        let newReview = {
            "review":newReview,
            "reviewer":session.username
        };
        
        let allReviews = bookFound.reviews.filter((review) => reviewer !== session.username);
        allReviews.push(newReview);
        
        bookFound.reviews = allReviews;

        let allBooks = books.filter((book) => book.ISBN !== isbn);
        allBooks.push(bookFound);

        res.send({
            "success":true,
            "result":[bookFound],
            "error":""
        });
    }else{
        res.send({
            "success":false,
            "error":"invalid isbn/review"
        });
    }
});

router.delete("/auth/review/:isbn", (req, res) => {
    var isbn = req.params.isbn;

    if(isbn){
        var session = {} //To be implemented
        let bookFound = books.filter((book) => book.ISBN === isbn);
        let reviews = bookFound.reviews.filter((review) => reviewer == session.username);
        
        if(reviews.length > 0){
            let allReviews = bookFound.reviews.filter((review) => reviewer !== session.username);
            bookFound.reviews = allReviews;
    
            let allBooks = books.filter((book) => book.ISBN !== isbn);
            allBooks.push(bookFound);
    
            res.send({
                "success":true,
                "result":[bookFound],
                "error":""
            });
        }else{
            res.send({
                "success":false,
                "error":"you don't have reviews to delete"
            });
        }
        
    }else{
        res.send({
            "success":false,
            "error":"invalid isbn"
        });
    }
});