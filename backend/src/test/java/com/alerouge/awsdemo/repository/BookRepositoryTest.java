package com.alerouge.awsdemo.repository;

import com.alerouge.awsdemo.model.Book;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

//@DataJpaTest
class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;

//    @Test
    @Disabled
    void first() {
        List<Book> books = bookRepository.findAll();
        assertEquals(3, books.size());
    }
}