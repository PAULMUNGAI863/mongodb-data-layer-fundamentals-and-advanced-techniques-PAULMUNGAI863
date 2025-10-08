// insert_books.js

use("plp_bookstore");

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 12.99,
    in_stock: true,
    pages: 218,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    published_year: 1960,
    price: 10.5,
    in_stock: true,
    pages: 324,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 14.0,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 9.99,
    in_stock: true,
    pages: 277,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.25,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 22.5,
    in_stock: true,
    pages: 309,
    publisher: "Bloomsbury"
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller",
    published_year: 2015,
    price: 18.0,
    in_stock: true,
    pages: 395,
    publisher: "Riverhead Books"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 20.99,
    in_stock: false,
    pages: 426,
    publisher: "Crown Publishing Group"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 17.75,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 16.5,
    in_stock: true,
    pages: 320,
    publisher: "Penguin Random House"
  }
]);
