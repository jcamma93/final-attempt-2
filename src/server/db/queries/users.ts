import { Query } from "..";
import { MysqlResponse, UsersTable } from "../models";

const find = (column: string, value: string | number) =>
    Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

const insert = (newUser: { name: string, email: string, password: string }) =>
    Query<MysqlResponse>('INSERT INTO users SET?', newUser);

export default {
    find,
    insert
};