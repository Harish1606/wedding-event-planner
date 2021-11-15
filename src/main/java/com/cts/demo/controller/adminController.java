package com.cts.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.demo.model.Admin;
import com.cts.demo.model.Image;
import com.cts.demo.model.Services;
import com.cts.demo.repository.adminRepository;
import com.cts.demo.repository.imageRepository;
import com.cts.demo.repository.serviceRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class adminController {

	@Autowired
	private adminRepository repo;
	
	@Autowired
	private imageRepository imagerepo;
	
	@Autowired
	private serviceRepository servicerepo;
	
	@PostMapping("/adminlogin")
	public Admin loginUser(@RequestBody Admin admin) throws Exception{
		Admin obj=repo.findById(admin.getId()).orElseThrow(()->new ResourceNotFoundException("Incorrect admin id or password"));
		if(obj.getPassword().equals(admin.getPassword())) {
			return obj;
		}
		else {
			throw new Exception("Incorrect admin id or password");
		}
	}
	
	@GetMapping("/getadmin/{id}")
	public ResponseEntity<Admin> getAdmin(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Admin admin=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Admin not found"));
		return ResponseEntity.ok().body(admin);
	}
	
	@PostMapping("/addservice")
	public Services addService(@RequestBody Services service) throws Exception{
		return servicerepo.save(service);
	}
	
	@GetMapping("/getservices")
	public List<Services> getAllServices(){
		return servicerepo.findAll();
	}
	
	@PostMapping("/addimage")
	public Image addImage(@RequestBody Image image) throws Exception{
		return imagerepo.save(image);
	}
	
	@GetMapping("/getimages")
	public List<Image> getAllImages(){
		return imagerepo.findAll();
	}
	
	@DeleteMapping("/deleteimage/{id}")
	public Map<String,Boolean> deleteUser(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Image image=imagerepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Image not Found"));
		imagerepo.delete(image);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}
}
