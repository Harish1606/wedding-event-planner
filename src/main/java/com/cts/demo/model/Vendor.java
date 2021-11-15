package com.cts.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vendortable")
public class Vendor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	private String type;
	private String mobile_no;
	private String address;
	private String password;
	private Boolean flag;
	
	public Vendor() {
	}
	
	public Vendor(Integer id, String name, String type, String mobile_no, String address, String password,
			Boolean flag) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.mobile_no = mobile_no;
		this.address = address;
		this.password = password;
		this.flag = flag;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getFlag() {
		return flag;
	}

	public void setFlag(Boolean flag) {
		this.flag = flag;
	}

	@Override
	public String toString() {
		return "Vendor [id=" + id + ", name=" + name + ", type=" + type + ", mobile_no=" + mobile_no + ", address="
				+ address + ", password=" + password + ", flag=" + flag + "]";
	}
}
