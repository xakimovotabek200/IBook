// import React from "react";

// function Book() {
//   return (
//     <div className="container">
//       <div className="container-in">
//         <div className="Book">
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//         </div>
//         <div className="Book">
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//         </div>
//         <div className="Book">
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//         </div>
//         <div className="Book">
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//           <div className="Book-in">
//             <img src={Book2} alt="" />
//           </div><div className="Book-in">
//             <img src={Book1} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Book;

import React from "react";
import BookImage from "../images/book.png";
import BookImage1 from "../images/book1.png";
import "./Book.css";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    ISBN: "978-0-7432-7356-5",
    genre: "Fiction",
    pageCount: 180,
    publisher: "Scribner",
    language: "English",
    isAvailable: true,
    image: BookImage1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    ISBN: "978-0-06-112008-4",
    genre: "Fiction",
    pageCount: 336,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    isAvailable: true,
    image: BookImage,
  },
];
function Book() {
  return books.map((book) => (
    <>
      <div className="container">
        <div className="container-in">
          <div className="Book">
            <div className="Book-in">
              <img src={book.image} alt="book image" />
            </div>    
          </div>
        </div>
      </div>
    </>
  ));
}

export default Book;
