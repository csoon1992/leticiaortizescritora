import React from 'react';
import BookContent from '../components/BookContent';
import PropTypes from 'prop-types';

const Books = ({ books }) => (
  <div id="section-books" className="px-8 py-10">
    {books.map((book) => (
      <BookContent book={book} key={book.id}></BookContent>
    ))}
  </div>
);

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
