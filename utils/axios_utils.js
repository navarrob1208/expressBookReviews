const axios = require('axios').default;

function getBooks(){
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:5000/").then((response) => {
            return resolve(JSON.stringify(response.data, null, 4));
        }).catch((error)=> {
            return reject(error)
        })
    })
}

function getBookByISBN(isbn){
    return new Promise(async (resolve, reject)=> {
        if(isbn){
            try {
                const response = await axios(`http://localhost:5000/isbn/${isbn}`);
                return resolve(JSON.stringify(response.data, null, 4));
            } catch (error) {
                return reject(error);
            }
        }else{
            return reject("invalid isbn");
        }
    });
}

function getBookByAuthor(author){
    return new Promise(async (resolve, reject)=> {
        if(author){
            try {
                const response = await axios(`http://localhost:5000/author/${author}`);
                return resolve(JSON.stringify(response.data, null, 4));
            } catch (error) {
                return reject(error);
            }
        }else{
            return reject("invalid author");
        }
    });
}

function getBooksByTitle(title){
    return new Promise(async (resolve, reject)=> {
        if(title){
            try {
                const response = await axios(`http://localhost:5000/title/${title}`);
                return resolve(JSON.stringify(response.data, null, 4));
            } catch (error) {
                return reject(error);
            }
        }else{
            return reject("invalid title");
        }
    });
}


getBooks().then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


getBookByISBN("9780451469885").then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


getBookByAuthor("Leo Tolstoy").then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


getBooksByTitle("War and Peace").then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});