import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="submit" value="Add Book" />
        </form>

    );
}

export default AddBook;