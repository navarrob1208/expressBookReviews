const books = require("../data/booksdb");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const users = require("../data/users");


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
                const accessToken = jwt.sign({ 
                    user: userFound.username
                }, process.env.JWT_SECRET, { 
                    expiresIn:'12h' 
                });

                req.session.authorization = {
                    accessToken, username
                }
                
                return res.status(200).json({
                    "success":true,
                    "result":[],
                    "accessToken": accessToken,
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

router.post("/auth/review/:isbn", (req, res) => {
    var isbn = req.params.isbn;
    var newReview = req.body.review;

    if(isbn && newReview){
        var sessionUser = req.user
        let bookFound = books.find((book) => book.ISBN === isbn);
        
        let newReviewObject = {
            "review":newReview,
            "reviewer":sessionUser
        };
        
        let allReviews = bookFound.reviews.filter((review) => review.reviewer !== sessionUser);
        allReviews.push(newReviewObject);
        
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
    var bookFound = books.find((book) => book.ISBN === isbn);

    if(bookFound){
        var sessionUser = req.user
        let reviews = bookFound.reviews.filter((review) => review.reviewer == sessionUser);
        
        if(reviews.length > 0){
            let allReviews = bookFound.reviews.filter((review) => review.reviewer !== sessionUser);
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
            "error":"invalid isbn, cannot find book"
        });
    }
});

router.get("/auth/get_message", (req,res) => {
    return res.status(200).json({message: "Hello, You are an authenticated user. Congratulations!"});
});

module.exports = router;