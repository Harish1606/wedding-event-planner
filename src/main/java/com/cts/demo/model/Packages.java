package com.cts.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="packages")
public class Packages {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	private String details;
	private String amount;
	private Integer vendor_id;
	public Packages() {
		
	}
	
	public Packages(Integer id, String name, String details, String amount, Integer vendor_id) {
		super();
		this.id = id;
		this.name = name;
		this.details = details;
		this.amount = amount;
		this.vendor_id = vendor_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public Integer getVendor_id() {
		return vendor_id;
	}

	public void setVendor_id(Integer vendor_id) {
		this.vendor_id = vendor_id;
	}

	@Override
	public String toString() {
		return "Packages [id=" + id + ", name=" + name + ", details=" + details + ", amount=" + amount + ", vendor_id="
				+ vendor_id + "]";
	}

}
