package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Packages;

@Repository
public interface packageRepository extends JpaRepository<Packages,Integer>{

}
