import express from 'express'
const router = express.Router();

import { addBook, editBook, deleteBook, showBook, showBookID } from '../controllers/bookController.js'

router.post('/', addBook);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);
router.get('/', showBook);
router.get('/:id', showBookID);

export default router;