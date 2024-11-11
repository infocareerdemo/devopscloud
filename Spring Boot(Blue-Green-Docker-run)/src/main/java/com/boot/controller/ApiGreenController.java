package com.boot.controller;

import java.sql.Date;
import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ApiGreenController {
	
	@GetMapping("/green")
	public String demoGreen() throws InterruptedException {
	
		LocalDateTime timestamp = LocalDateTime.now();
		
		return "result from get GREEN api" + timestamp;
	}
	
}
