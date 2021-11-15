package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Vendor;

@Repository
public interface vendorRepository extends JpaRepository<Vendor, Integer>{

}
