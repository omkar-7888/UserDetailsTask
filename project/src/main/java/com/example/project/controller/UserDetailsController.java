package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.model.UserDetails;
import com.example.project.model.UserName;
import com.example.project.repository.UserNameRepository;
import com.example.project.repository.UserRepository;


@RestController
@CrossOrigin("*")
public class UserDetailsController {

	@Autowired
	private UserNameRepository userNameRepository;
	
	@Autowired
	private UserRepository  userRepository;
	
	@PostMapping("/addUser")
	public ResponseEntity<?> addUser(@RequestBody UserDetails user) {
		
		
		List<UserDetails> userdetails= userRepository.findAll();
		String username=user.getFirstName()+user.getLastName();
		 user.setUsername(username);
				for (UserDetails userDetails2 : userdetails) {
					try {
						if(userDetails2.getUsername().equals(username)) {
							
							 throw new AddUserException();				
							}
					}
					catch (AddUserException e){
					return ResponseEntity.ok(e.getMessage());
					
					}
				
				} 
				UserName userName=new UserName();
				userName.setUsername(username);
				userName.setUserType(user.getUserType());
				
				userNameRepository.save(userName);
			userRepository.save(user);
		return ResponseEntity.ok("User Added");
	
	}
}
