import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api-service';
import { Category } from '../../types';

const Create = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryid, setSelectedCategory] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
   
    
    const nav = useNavigate();

    useEffect(() => {
        apiService("/api/categories").then(setCategories);
        
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch('/api/books', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, price, categoryid })
        });

        const data = await res.json();

        if (res.ok) {
            nav(`/books/${data.id}`);
        } else {
            alert(`Unable to add Book \n\n${data.message}`);
        }
    };

    return (
        <div className="row justify-content-center">
            <h1 className='text-info'>Add a New Book!</h1>
            <div className="col-12 col-md-8">
                <form className="bg-light">
                    <label className='text-info'>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    <label className='text-info'>Author</label>
                    <input value={author} onChange={e => setAuthor(e.target.value)} className="form-control" />
                    <label className='text-info'>Price</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} className="form-control" />
                <select value={categoryid} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value={"0"}>Please choose one...</option>
                {categories.map((c) => (
                    <option  key={`category-${c.id}`} value={c.id}>{c.name}</option>
                ))}
                </select>
                    <button disabled={!title || !author || !price} onClick={handleSubmit} className="btn btn-dark">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;