package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Services;

@Repository
public interface serviceRepository extends JpaRepository<Services,Integer>{

}