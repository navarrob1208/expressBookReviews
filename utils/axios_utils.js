const axios = require('axios').default;

function getBooks(){
    return new Promise((resolve, reject) => {
        axios.get("localhost:5000/").then((response) => {
            return resolve(response);
        }).catch((err)=> {
            return reject(error)
        })
    })
}

function getBookByISBN(isbn){
    return new Promise(async (resolve, reject)=> {
        try {
            const response = await axios("localhost:5000/isbn/", {
                params:{
                    "isbn":isbn
                }
            });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function getBookByAuthor(author){
    return new Promise(async (resolve, reject)=> {
        try {
            const response = await axios("localhost:5000/author/", {
                params:{
                    "author":author
                }
            });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}

function getBookByTitle(title){
    return new Promise(async (resolve, reject)=> {
        try {
            const response = await axios("localhost:5000/title/", {
                params:{
                    "title":title
                }
            });
            return resolve(response);
        } catch (error) {
            return reject(error);
        }
    });
}