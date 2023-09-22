import { Request } from "express";
import { UsersTable } from "../server/db/models";


// Book Interfaces

export interface Category {
    id: number,
    name: string;
}

export interface Book {
    id?: number,
    categoryid: Category["id"],
    title: string,
    author: string,
    price: number,
    created_at?: string | Date;
}

export interface BookWithCategory extends Book {
    name: Category["name"]
}

// User Interface

export interface User {
    id: number,
    email: string,
    password: string, 
    role: string,
    created_at: string | Date;
    name: string;
}

// Auth Interfaces

export interface ReqUser extends Request {
    user?: UsersTable | Payload;
}

export interface Payload extends UsersTable {
    userid?: number;
    role?: number;
}