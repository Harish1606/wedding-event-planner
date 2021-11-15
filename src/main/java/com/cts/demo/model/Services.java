package com.cts.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="services")
public class Services {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String service;
	
	public Services() {
		
	}
	
	public Services(Integer id, String service) {
		super();
		this.id = id;
		this.service = service;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	@Override
	public String toString() {
		return "Services [id=" + id + ", service=" + service + "]";
	}
	
}
