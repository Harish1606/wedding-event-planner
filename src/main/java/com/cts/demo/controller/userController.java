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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.demo.model.Request;
import com.cts.demo.model.User;
import com.cts.demo.repository.requestRepository;
import com.cts.demo.repository.userRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class userController {
	
	@Autowired
	private userRepository repo;
	
	@Autowired
	private requestRepository requestrepo;
	
	@PostMapping("/userregister")
	public User registerUser(@RequestBody User user) throws Exception{
		return repo.save(user);
	}
	
	@PostMapping("/userlogin")
	public User loginUser(@RequestBody User user) throws Exception{
		User obj=repo.findById(user.getId()).orElseThrow(()->new ResourceNotFoundException("User not registered"));
		if(obj.getPassword().equals(user.getPassword())) {
			return obj;
		}
		else {
			throw new Exception("Incorrect user id or password");
		}
	}
	
	@GetMapping("/getusers")
	public List<User> getAllUsers(){
		return repo.findAll();
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<User> getUser(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		User user=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("User not found"));
		return ResponseEntity.ok().body(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public Map<String,Boolean> deleteUser(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		User user=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("User not Found"));
		repo.delete(user);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}
	
	@PutMapping("/approve")
	public ResponseEntity<User> approveUser(@RequestBody User user) throws ResourceNotFoundException{
		User obj=repo.findById(user.getId()).orElseThrow(()->new ResourceNotFoundException("User not found"));
		obj.setFlag(true);
		final User updatedUser=repo.save(obj);
		return ResponseEntity.ok(updatedUser);
	}
	
	@PutMapping("/updateuser")
	public ResponseEntity<User> updateUser(@RequestBody User user) throws ResourceNotFoundException{
		User obj=repo.findById(user.getId()).orElseThrow(()->new ResourceNotFoundException("User not found"));
		obj.setCity(user.getCity());
		obj.setDob(user.getDob());
		obj.setFlat_no(user.getFlat_no());
		obj.setGender(user.getGender());
		obj.setLandmark(user.getLandmark());
		obj.setMobile_no(user.getMobile_no());
		obj.setPassword(user.getPassword());
		obj.setState(user.getState());
		obj.setStreet_name(user.getStreet_name());
		final User updatedUser=repo.save(obj);
		return ResponseEntity.ok(updatedUser);
	}
	
	@PostMapping("/sendrequest")
	public Request sendRequest(@RequestBody Request request) throws Exception{
		return requestrepo.save(request);
	}
	
	@GetMapping("/getrequests")
	public List<Request> getAllRequests(){
		return requestrepo.findAll();
	}
	
	@PutMapping("/requeststatus")
	public ResponseEntity<Request> availableRequest(@RequestBody Request request) throws ResourceNotFoundException{
		Request obj=requestrepo.findById(request.getId()).orElseThrow(()->new ResourceNotFoundException("Request not found"));
		obj.setStatus_(request.getStatus_());
		obj.setFlag(request.getFlag());
		final Request updatedRequest=requestrepo.save(obj);
		return ResponseEntity.ok(updatedRequest);
	}
	
	
	
}
