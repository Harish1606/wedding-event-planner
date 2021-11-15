package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Request;

@Repository
public interface requestRepository extends JpaRepository<Request,Integer>{

}
