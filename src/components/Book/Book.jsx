import React from "react";
import "./Book.css";

function Book({ bookNumber }) {
  return <div className={`book book-${bookNumber}`}></div>;
}

function Bookshelf() {
  const totalBooks = 9;

  const books = Array.from({ length: totalBooks }, (_, i) => i + 10);

  return (
    <div className="bookshelf">
      <div className="shelf"></div>
      <div className="books">
        {books.map((bookNumber) => (
          <Book key={bookNumber} bookNumber={bookNumber} />
        ))}
      </div>
      <div className="shelf"></div>{" "}
      <div className="books">
        {books.map((bookNumber) => (
          <Book key={bookNumber} bookNumber={bookNumber} />
        ))}
      </div>
      <div className="shelf"></div>{" "}
      <div className="books">
        {books.map((bookNumber) => (
          <Book key={bookNumber} bookNumber={bookNumber} />
        ))}
      </div>
      <div className="shelf"></div>
      <div className="books">
        {books.map((bookNumber) => (
          <Book key={bookNumber} bookNumber={bookNumber} />
        ))}
      </div>
      <div className="shelf"></div>
    </div>
  );
}

export default Bookshelf;
