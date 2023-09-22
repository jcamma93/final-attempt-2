import { Query } from "..";
import { Category } from "../../../types";

const getAll = () => Query<Category[]>('SELECT * FROM Categories');
const getOne = (id: Category['id']) => Query<Category[]>('SELECT * FROM Categories WHERE id=?', [id]);
const create = (newCategory: Category) => Query('INSERT INTO Categories SET ?', [newCategory]);
const update = (editedCategory: Category, id: Category['id']) => Query('UPDATE Categories SET ? WHERE id=?', [editedCategory, id]);
const destroy = (id: Category['id']) => Query('DELETE FROM Categories WHERE id=?', [id]);


export default {
    all: getAll,
    find: getOne,
    create,
    update,
    delete: destroy
};