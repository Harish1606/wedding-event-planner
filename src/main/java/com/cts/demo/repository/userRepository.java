package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.User;

@Repository
public interface userRepository extends JpaRepository<User,Integer>{
	
}
