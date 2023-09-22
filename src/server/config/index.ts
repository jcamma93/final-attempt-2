import * as dotenv from 'dotenv';
dotenv.config();


export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};




export default {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    }
}