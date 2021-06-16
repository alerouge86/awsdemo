package com.alerouge.awsdemo;

import com.alerouge.awsdemo.model.Book;
import com.alerouge.awsdemo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class AwsdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(AwsdemoApplication.class, args);
		System.out.println("spring boot application running 6");
	}

}
