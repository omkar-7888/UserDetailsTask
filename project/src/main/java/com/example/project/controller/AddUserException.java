package com.example.project.controller;

public class AddUserException extends RuntimeException  {
	
	public AddUserException() {
		super("Username is already present...");
	}
	
	@Override
	
	public String toString() {
		return "Username is already present..." ;
	}

}
