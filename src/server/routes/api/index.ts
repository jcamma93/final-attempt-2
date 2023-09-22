import * as express from 'express';
import categoriesRouter from './categories'
import pizzaRouter from './pizza';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/pizza', pizzaRouter);



export default router;