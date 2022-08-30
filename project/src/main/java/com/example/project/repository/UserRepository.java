package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Integer> {

	
}
