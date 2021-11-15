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

import com.cts.demo.model.Packages;
import com.cts.demo.model.Response;
import com.cts.demo.model.Vendor;
import com.cts.demo.repository.packageRepository;
import com.cts.demo.repository.responseRepository;
import com.cts.demo.repository.vendorRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class vendorController {

	@Autowired
	private vendorRepository repo;
	
	@Autowired
	private packageRepository packagerepo;
	
	@Autowired
	private responseRepository responserepo;
	
	@PostMapping("/addvendor")
	public Vendor addVendor(@RequestBody Vendor vendor) throws Exception{
		return repo.save(vendor);
	}
	
	@PostMapping("/vendorlogin")
	public Vendor loginUser(@RequestBody Vendor vendor) throws Exception{
		Vendor obj=repo.findById(vendor.getId()).orElseThrow(()->new ResourceNotFoundException("Vendor not registered"));
		if(obj.getPassword().equals(vendor.getPassword())) {
			return obj;
		}
		else {
			throw new Exception("Incorrect user id or password");
		}
	}
	
	@PutMapping("/updatepassword/{id}")
	public ResponseEntity<Vendor> updatePassword(@PathVariable(value="id") Integer Id,@RequestBody Vendor vendor) throws ResourceNotFoundException{
		Vendor obj=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Vendor not found"));
		obj.setFlag(vendor.getFlag());
		obj.setPassword(vendor.getPassword());
		final Vendor updatedVendor=repo.save(obj);
		return ResponseEntity.ok(updatedVendor);
	}
	
	@GetMapping("/getvendor/{id}")
	public ResponseEntity<Vendor> getVendor(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Vendor vendor=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Vendor not found"));
		return ResponseEntity.ok().body(vendor);
	}
	
	@PutMapping("/updatevendor")
	public ResponseEntity<Vendor> updateUser(@RequestBody Vendor vendor) throws ResourceNotFoundException{
		Vendor obj=repo.findById(vendor.getId()).orElseThrow(()->new ResourceNotFoundException("Vendor not found"));
		obj.setType(vendor.getType());
		obj.setMobile_no(vendor.getMobile_no());
		obj.setAddress(vendor.getAddress());
		obj.setPassword(vendor.getPassword());
		final Vendor updatedVendor=repo.save(obj);
		return ResponseEntity.ok(updatedVendor);
	}
	
	@GetMapping("/getpackages")
	public List<Packages> getAllPackages(){
		return packagerepo.findAll();
	}
	
	@GetMapping("/getpackage/{id}")
	public ResponseEntity<Packages> getPackage(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Packages pack=packagerepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Package not found"));
		return ResponseEntity.ok().body(pack);
	}
	
	@PostMapping("/addpackage")
	public Packages addPackage(@RequestBody Packages packages) throws Exception{
		return packagerepo.save(packages);
	}
	
	@PutMapping("/updatepackage")
	public ResponseEntity<Packages> updatePackage(@RequestBody Packages packages) throws ResourceNotFoundException{
		Packages obj=packagerepo.findById(packages.getId()).orElseThrow(()->new ResourceNotFoundException("Package not found"));
		obj.setName(packages.getName());
		obj.setDetails(packages.getDetails());
		obj.setAmount(packages.getAmount());
		final Packages updatedPackage=packagerepo.save(obj);
		return ResponseEntity.ok(updatedPackage);
	}
	
	@DeleteMapping("/deletepackage/{id}")
	public Map<String,Boolean> deletePackage(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Packages packages=packagerepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Package not Found"));
		packagerepo.delete(packages);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}
	
	@PostMapping("/sendresponse")
	public Response sendResponse(@RequestBody Response response) throws Exception{
		return responserepo.save(response);
	}
	
	@GetMapping("/getresponses")
	public List<Response> getAllResponses(){
		return responserepo.findAll();
	}
	
	@PutMapping("/updateresponse")
	public ResponseEntity<Response> updateResponse(@RequestBody Response response) throws ResourceNotFoundException{
		Response obj=responserepo.findById(response.getId()).orElseThrow(()->new ResourceNotFoundException("Response not found"));
		obj.setFlag(true);
		final Response updatedResponse=responserepo.save(obj);
		return ResponseEntity.ok(updatedResponse);
	}
	
	@DeleteMapping("/deleteresponse/{id}")
	public Map<String,Boolean> deleteResponse(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Response response=responserepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Response not Found"));
		responserepo.delete(response);
		Map<String,Boolean> res=new HashMap<>();
		res.put("Deleted", Boolean.TRUE);
		return res;
	}

}
