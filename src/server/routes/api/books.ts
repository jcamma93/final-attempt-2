import * as express from 'express';
import Books from '../../db/queries/books';
import { Book } from '../../../types';

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
    try {
        const books = await Books.all();
        res.json(books)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured" })
    }
});

booksRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) return res.status(400).json({ message: "ID must be a valid integer" });

    try {
        const [book] = await Books.find(id);

        if (!book) return res.status(404).json({ message: "Book with that ID does not exist" })

        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured" })
    }
});

booksRouter.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) return res.status(400).json({ message: "ID must be a valid integer" });

    try {
        const { affectedRows } = await Books.delete(id);

        if (affectedRows) {
            res.status(200).json({ message: "Successfully deleted" });
        } else {
            res.status(200).json({ message: "Action successful, but nothing to delete" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An unknown application error has occured" });
    }
});

booksRouter.post('/', async (req, res) => {
    const { title, author, price, categoryid } = req.body;

    if (!title || !author || !price) return res.status(400).json({ message: "All fields must contatin valid inputs"})

    const newBook: Book = { title, author, price, categoryid}
    try {
        const book = await Books.create(newBook)
        res.status(201).json({ message: "Book added successfully", id: book.insertId })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An unknown application error has occured"})
    }
});

booksRouter.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) return res.status(400).json({ message: "ID must be a valid integer" });
    
    const { title, author, price, categoryid } = req.body;

    if (!title || !author || !price) return res.status(400).json({ message: "All fields must contain valid info" })

    const updatedBook: Book = { title, author, price, categoryid };

    try {
        const book = await Books.update(updatedBook, id);
        res.status(201).json({ message: "Book edited successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json ({ message: "An unknown application error has occured" });
    }
});

export default booksRouter;