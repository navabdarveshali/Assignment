const express = require('express');
const { getBooksByGenre, addBook, updateBook, deleteBook ,getAllBooks,getBooksById} = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Get all books by genre
router.get('/genre/:genre', getBooksByGenre);

// Add a new book
router.post('/add', authMiddleware, addBook);

// Update an existing book
router.put('/update/:id', authMiddleware, updateBook);

// Remove a book
router.delete('/delete/:id', authMiddleware, deleteBook);

//all books
router.get('/allbooks',getAllBooks);

router.get('/allbooks/:id',getBooksById);

module.exports = router;
