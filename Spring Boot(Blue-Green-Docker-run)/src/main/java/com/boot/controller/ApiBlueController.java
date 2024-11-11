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
public class ApiBlueController {
	
	@GetMapping("/get")
	public String demo() throws InterruptedException {
		
		return "result from get api";
	}
	
	@PostMapping("/post")
	public String post() {
		return "result from post api";
	}
	
	@PutMapping("/put")
	public String put() {
		return "result from put api";
	}
	@DeleteMapping("/delete")
	public String delete() {
		return "result from delete api";
	}

}
