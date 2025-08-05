import React from 'react';

const books = [
  { title: 'React in Action', author: 'Mark T.', price: 400 },
  { title: 'JavaScript Essentials', author: 'John D.', price: 350 },
];

const BookDetails = () => {
  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <strong>{book.title}</strong> by {book.author} - ₹{book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
