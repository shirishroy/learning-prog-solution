package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // ✅ Setter for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void listBooks() {
        System.out.println("BookService: Listing books...");
        bookRepository.fetchBooks();
    }
}
