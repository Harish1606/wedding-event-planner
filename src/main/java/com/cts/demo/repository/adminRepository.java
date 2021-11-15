package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Admin;

@Repository
public interface adminRepository extends JpaRepository<Admin,Integer>{

}
