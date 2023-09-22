import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookWithCategory } from '../../types';
import BookCard from '../components/BookCard';

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookWithCategory>();

    useEffect(() => {
        async function getBook() {
            try {
                const res = await fetch('/api/books/' + id);
                const data = await res.json();

                if (res.ok) {
                    setBook(data);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("An error has occured, please check console");
                console.error(error);
            }
        }
        getBook();
    }, [id]); 

    return (
        <div>
            <h1 className='text-secondary'>Here's a closer look!:</h1>
            {book && <BookCard isSingle book={book} />}
        </div>
    )

}

export default SingleBook;