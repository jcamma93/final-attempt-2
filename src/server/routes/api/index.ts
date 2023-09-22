import * as express from 'express';
import categoriesRouter from './categories'
import pizzaRouter from './pizza';
import booksRouter from './books';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/pizza', pizzaRouter);
router.use('/books', booksRouter);


export default router;