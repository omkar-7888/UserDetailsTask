package com.example.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;


@ControllerAdvice
public class ExceptionHandlerClass {


	@ExceptionHandler(AddUserException.class)
	public ResponseEntity<?> handlefindUserException(AddUserException e,WebRequest req){
		return new ResponseEntity<> (e.toString(),HttpStatus.NOT_FOUND);
	}
}
