import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookWithCategory } from '../../types';

const BookCard = ({ book, isSingle }: BookCardProps) => {
    const nav = useNavigate();

    const handleNavigate = () => {
        if (!isSingle) {
            nav(`/books/${book.id}`);
        }
    }

    return (
        <div onClick={handleNavigate}>
            <div className='card'>
                <div className="card-title">Title:{book?.title}</div>
                <div className="card-body">By: {book?.author}
                    <br />
                    <br />
                    Category id: {book?.categoryid}
                </div>
                <div className="card-footer">Price: {book?.price}</div>
                {isSingle && (
                    <button onClick={() => nav(`/books/${book.id}/edit`)} className='btn btn-primary'>
                        Edit
                    </button>
                )}
            </div>
        </div>
    )

}

export default BookCard;

interface BookCardProps {
    isSingle?: boolean;
    book: BookWithCategory;
}