import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Category } from '../../types';
import { apiService } from '../services/api-service';

const Edit = () => {
    const { id } = useParams();
    const [categoryid, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");

    const nav = useNavigate();

    useEffect (() => {
        async function getBook() {
            try {
                const res = await fetch('/api/books/' + id);
                const data = await res.json();

                if(res.ok) {
                    setTitle(data.title);
                    setAuthor(data.author);
                    setPrice(data.price);
                    setSelectedCategory(data.setSelectedCategory)
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("An error has occured");
                console.error(error);
            }
        }
        getBook();
    }, [id]);

    useEffect(() => {
        apiService("/api/categories").then(setCategories);
        apiService(`/api/books/${id}`).then((book) => {
            setTitle(book.title);
            setPrice(book.price)
            setSelectedCategory(book.categoryid);
        })
    }, []);

    const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch (`/api/books/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, price, categoryid })
        });
        const data = await res.json();

        if(res.ok) {
            nav(`/books/${id}`);
        } else {
            alert(`Unable to add book ${data.message}`);
        }
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
        const data = await res.json();

        if (res.ok) {
            nav(`/books`);
        } else {
            alert(`Unable to add Book \n\n${data.message}`);
        }

    };

    return (
        <div className="row justify-content-center">
        <div>
            <form className="bg-light">
                <h1 className='text-center text-secondary'>Editing Book #{id}</h1>
                <label className='text-info'>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                <label className='text-info'>Author</label>
                <input value={author} onChange={e => setAuthor(e.target.value)} className="form-control" />
                <label className='text-info'>Price</label>
                <input value={price} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                <select value={categoryid} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value={"0"}>Please choose one...</option>
            {categories.map((c) => (
                <option key={`category-${c.id}`} value={c.id}>{c.name}</option>
            ))}
            </select>
                <button disabled={!title || !author || !price || categoryid == "0"} onClick={handleUpdate} className="btn btn-secondary">
                    Update Book
                </button>
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                </button>
            </form>
        </div>
    </div>
);
    
}

export default Edit;