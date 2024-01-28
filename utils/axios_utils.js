const axios = require('axios').default;

function getBooks(){
    return new Promise(async (resolve, reject) => {
        axios.get("localhost:5000/").then((response) => {
            return resolve(response);
        }).catch(())
    })
}

function getBookByISBN(isbn){

}

function getBookByAuthor(author){
    
}

function getBookByTitle(title){

}