import { Query } from "..";
import { Book, BookWithCategory } from '../../../types'

const getAll = () => Query<BookWithCategory[]>(`
    SELECT b.*, c.name
        FROM Books b
        Join Categories c
        ON b.categoryid=c.id`);

const getOne = (id: Book['id']) => Query<BookWithCategory[]>(`
    SELECT b.*, c.name
        FROM Books b
        Join Categories c
        ON b.categoryid=c.id
        WHERE b.id=?`, [id]);

const create = (newBook: Book) => Query('INSERT INTO Books SET ?', [newBook]);
const update = (editedBook: Book, id: Book['id']) => Query('UPDATE Books SET ? WHERE id=?', [editedBook, id]);
const destroy = (id: Book['id']) => Query('DELETE FROM Books WHERE id=?', [id]);

export default {
    all: getAll,
    find: getOne,
    create,
    update,
    delete: destroy
};