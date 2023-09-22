import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Category } from '../../types';
import { apiService } from '../services/api-service';

const Edit = () => {
    const { id } = useParams();
    const [categoryid, setSelectedCategory] = useState("");
    const [cetegories, setCategories] = useState<Category[]>([]);
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

    return (
        <div></div>
    )
}

export default Edit;