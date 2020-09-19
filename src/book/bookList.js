import React, { useState, useMemo } from 'react';
import Book from './book';
import AddBook from './addBook';

const bookList = [
    { id: 1, title: "Book1" },
    { id: 2, title: "Book2" }
]

const BookList = () => {
    const [books, setbooks] = useState(bookList);

    const addBook = (title) => {
        console.log("addBook Called")
        setbooks([...books, { id: 1211, title }])
    };

    const deleteBook = id => {
        console.log("deleteBook called")
        setbooks(books.filter(book => book.id !== id))
    };

    return (
        <div>
            <ul>
                <AddBook addBook={addBook} />
                <Book books={books} deleteBook={deleteBook} />
            </ul>
        </div>
    );
}

export default BookList;