/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Book = require('./models/book.js');
const Author = require('./models/author.js');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
  
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};
  
  
connect()

/*----------------------------- Query Functions -----------------------------*/

//creat Auther
const createAuthor = async () => {
    const autherData = {
        name: 'J.K. Rowling',
        email: 'jk.rowling@mail.com'
    };

    const auther =await Author.create(autherData);

    console.log('New author:', auther);
};

// Create Book
const createBook = async () => {
    const bookData = {
        title: "Harry Potter and the Sorcerer's Stone",
        isAvailable: true,
    };

    const book = await Book.create(bookData);
    
    console.log("New book:", book);
};


//Auther id = 67163d5ab92712fa413d56ad
//book id = 67163f88248b2e1ff06d1ca2
/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
    console.log('Queries running.');
    // await createAuthor();
    await createBook();
    // await findBooks();
    // await assignAuthorToBook();
    // await removeAuthorFromBook();
};