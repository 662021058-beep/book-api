import express from 'express'
const router = express.Router();

import { addBook, editBook, deleteBook, showBook, showBookID } from '../controllers/bookController.js'
import authenticateToken from '../middlewares/auth.js';

router.post('/',authenticateToken, addBook);
router.put('/:id',authenticateToken, editBook);
router.delete('/:id',authenticateToken, deleteBook);
router.get('/',authenticateToken, showBook);
router.get('/:id',authenticateToken, showBookID);

export default router;