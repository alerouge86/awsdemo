package com.alerouge.awsdemo.controller;

import com.alerouge.awsdemo.model.Book;
import com.alerouge.awsdemo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> books() {
        System.out.println("find all books called");
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}")
    public Book book(@PathVariable Long id) {
        Optional<Book> bookOpt = bookRepository.findById(id);
        return bookOpt.get();
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }
}
