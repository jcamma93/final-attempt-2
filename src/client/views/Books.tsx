import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api-service';
import { BookWithCategory } from '../../types';
import BookCard from '../components/BookCard'


const Books = (props: BookProps) => {

    const playSound = () => {
        const audio = new Audio('/audio/soundFile.mp3');
        audio.play();
    };

    const [books, setBooks] = useState<BookWithCategory[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data))
            .catch(() => navigate('/login'))
    }, []);


    return (
        <div>
            <h1 className='text-center display-1 text-secondary'>{<div>
                <h1>Books</h1>
                <button className='btn btn-primary mb-1' onClick={playSound}>Sound</button>
                {books.map(b => (
                    <BookCard book={b} key={`book-card-${b.id}`} />
                ))}
            </div>}</h1>
        </div>
    );
};

interface BookProps { }

export default Books;

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { BookWithCategory } from '../../types';
// import BookCard from '../components/BookCard';

// const Books = () => {
//     const [books, setBooks] = useState<BookWithCategory[]>([]);

//     useEffect(() => {
//         async function getBooks() {
//             try {
//                 const res = await fetch('/api/books');
//                 const data = await res.json();

//                 if(res.ok) {
//                     setBooks(data);
//                 } else {
//                     alert(data.message);
//                 }
//             } catch(error) {
//                 alert("An error has occured, please check console");
//                 console.error(error);
//             }
//         }
//         getBooks();
//     }, [])

//     return (
//         <div>
//             <h1>Books</h1>
//             {books.map(b => (
//                 <BookCard book={b} key={`book-card-${b.id}`} />
//             ))}
//         </div>
//     )
// }

// export default Books;