//package com.example.project.service;
//
//import java.util.List;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import com.example.project.controller.AddUserException;
//import com.example.project.model.UserDetails;
//import com.example.project.model.UserName;
//import com.example.project.repository.UserNameRepository;
//import com.example.project.repository.UserRepository;
//@Service
//public class UserService {
//	
//	@Autowired
//	private UserRepository repository;
//	@Autowired
//	private UserNameRepository userNameRepository;
//	
//	public ResponseEntity<String> addUserDetails(UserDetails user) throws AddUserException {
//		List<UserDetails> userdetails= repository.findAll();
//		String username=user.getFirstName()+user.getLastName();
//		 user.setUsername(username);
//				for (UserDetails userDetails2 : userdetails) {
//					try {
//						if(userDetails2.getUsername().equals(username)) {
//							
//							 throw new AddUserException();				
//							}
//					}
//					catch (AddUserException e){
//					return ResponseEntity.ok(e.getMessage());
//						
//						
//						
//					}
//					
//					
//				} 
//				UserName userName=new UserName();
//				userName.setUsername(username);
//				userName.setUserType(user.getUserType());
//				
//				userNameRepository.save(userName);
//			repository.save(user);
//		return ResponseEntity.ok("User Added");
//	}
//
//	
//}
