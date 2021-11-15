package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Response;

@Repository
public interface responseRepository extends JpaRepository<Response,Integer>{

}
