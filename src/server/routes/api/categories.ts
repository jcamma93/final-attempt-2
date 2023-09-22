import * as express from 'express';
import categories from '../../db/queries/categories';


const categoriesRouter = express.Router();

categoriesRouter.get('/', async (req, res) => {
    try {
        const category = await categories.all();
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An unknown application error has occured" })
    }
});

categoriesRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) return res.status(400).json({ message: "ID must be a valid integer" });

    try {
        const [category] = await categories.find(id);

        if (!category) return res.status(400).json({ message: "Category with that ID does not exist" })

        res.json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured" })
    }
});

export default categoriesRouter;