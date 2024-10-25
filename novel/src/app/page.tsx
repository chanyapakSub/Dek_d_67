// src/app/page.tsx

import React from 'react';
import { fetchBooks } from '@/service/bookService'
import { BookType } from '../interface/bookTypes';
import NovelSlider from '@/componant/Molecules/novelSlider'

export default async function BooksPage() {
  const query = 'fantasy'; // คำค้นหาสำหรับประเภทหนังสือ เช่น "fantasy", "science fiction", หรือ "mystery"
  const books = await fetchBooks(query);
  console.log('books',books)

  return (
    <main className='w-full min-h-screen'>
      {/* <NovelSlider books={books} /> */}
      <div>
        <h1>Books List</h1>
        <ul>
          {books.map((book) => (
            <li key={book.title}>
              <h2>{book.title}</h2>
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              )}
              <p>Author: {book.author_name?.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
