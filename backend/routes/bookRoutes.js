const express = require('express');
const router = express.Router();
const {getBooks, updateBook, addBook, deleteBook, getBookById} = require('../controllers/bookController')

router.route('/').get(getBooks).post(addBook);
router.route('/:id').put(updateBook).delete(deleteBook).get(getBookById);

module.exports = router