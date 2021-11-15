package com.cts.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.demo.model.Image;

@Repository
public interface imageRepository extends JpaRepository<Image,Integer>{

}
