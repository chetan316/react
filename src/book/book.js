import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books, deleteBook }) => {
    return (
        books.map(book => (

            <li key={book.id} onClick={() => deleteBook(book.id)}>{book.title}</li>

        ))
    )
};


Book.propTypes = {
    books: PropTypes.array.isRequired,
    deleteBook: PropTypes.func.isRequired
}

export default Book