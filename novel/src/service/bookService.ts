// src/services/bookService.ts
import { BookType } from '../interface/bookTypes';

// ฟังก์ชันเพื่อดึงข้อมูลหนังสือจาก Open Library โดยใช้คำค้นหา
export async function fetchBooks(query: string): Promise<BookType[]> {
  const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
  const data = await res.json();
  return data.docs || [];
}
