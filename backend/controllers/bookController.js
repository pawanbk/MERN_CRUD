const Book = require('../models/Book')

//@desc Get Books
//@route GET api/books/
const getBooks = async (req,res) =>{
    const books = await Book.find();
    if(!books){
        return await res.status(400).message({message:"something wrong happen"})
    }
    return await res.status(200).json({books});
}

const getBookById = async(req,res) =>{
    const id = req.params.id;
    const book = await Book.findById(id);
    if(!book){
        return await res.status(404).json({message:"No book found"})
    }
    return await res.status(200).json({book});
}

//@desc Add Books
//@route POST api/books/
const addBook = async (req,res) =>{
    const {title,price,author, description} = req.body;
    const book = new Book({
        title,
        price,
        author,
        description
    });
    book.save();
    if(!book){
        return await res.status(400).json({message:"something wrong"})
    }
    return await res.status(200).json({message:"New Book added"});
}
//@desc Update Books
//@route PUT api/books/:id
const updateBook = async (req,res) =>{
    const id = req.params.id;
    const {title,price,author,description} = req.body;
    const book = await Book.findByIdAndUpdate(id,{
        title,price,author,description
    });
    await book.save();
    if(!book){
        return res.status(401).json({message:"No book found"})
    }
    return await res.status(200).json({message:"Book has been Updated"});
}

//@desc delete Book
//@route DELETE api/books/:id
const deleteBook = async (req,res) =>{
    const id = req.params.id;
    await Book.findByIdAndRemove(id);
    return await res.status(200).json({message:"Book deleted"});
}

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}