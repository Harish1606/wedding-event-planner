package com.cts.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="response")
public class Response {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private Integer package_id1;
	private Integer package_id2;
	private Integer package_id3;
	private String package_name1;
	private String package_name2;
	private String package_name3;
	private String package_amount1;
	private String package_amount2;
	private String package_amount3;
	private Integer vendor_id;
	private String vendor_name;
	private String vendor_number;
	private String vendor_type;
	private Integer user_id;
	private Integer req_id;
	private Boolean flag;
	
	public Response() {
		
	}
	
	public Response(Integer id, Integer package_id1, Integer package_id2, Integer package_id3, String package_name1,
			String package_name2, String package_name3, String package_amount1, String package_amount2,
			String package_amount3, Integer vendor_id, String vendor_name, String vendor_number, String vendor_type,
			Integer user_id, Integer req_id, Boolean flag) {
		super();
		this.id = id;
		this.package_id1 = package_id1;
		this.package_id2 = package_id2;
		this.package_id3 = package_id3;
		this.package_name1 = package_name1;
		this.package_name2 = package_name2;
		this.package_name3 = package_name3;
		this.package_amount1 = package_amount1;
		this.package_amount2 = package_amount2;
		this.package_amount3 = package_amount3;
		this.vendor_id = vendor_id;
		this.vendor_name = vendor_name;
		this.vendor_number = vendor_number;
		this.vendor_type = vendor_type;
		this.user_id = user_id;
		this.req_id = req_id;
		this.flag = flag;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getPackage_id1() {
		return package_id1;
	}

	public void setPackage_id1(Integer package_id1) {
		this.package_id1 = package_id1;
	}

	public Integer getPackage_id2() {
		return package_id2;
	}

	public void setPackage_id2(Integer package_id2) {
		this.package_id2 = package_id2;
	}

	public Integer getPackage_id3() {
		return package_id3;
	}

	public void setPackage_id3(Integer package_id3) {
		this.package_id3 = package_id3;
	}

	public String getPackage_name1() {
		return package_name1;
	}

	public void setPackage_name1(String package_name1) {
		this.package_name1 = package_name1;
	}

	public String getPackage_name2() {
		return package_name2;
	}

	public void setPackage_name2(String package_name2) {
		this.package_name2 = package_name2;
	}

	public String getPackage_name3() {
		return package_name3;
	}

	public void setPackage_name3(String package_name3) {
		this.package_name3 = package_name3;
	}

	public String getPackage_amount1() {
		return package_amount1;
	}

	public void setPackage_amount1(String package_amount1) {
		this.package_amount1 = package_amount1;
	}

	public String getPackage_amount2() {
		return package_amount2;
	}

	public void setPackage_amount2(String package_amount2) {
		this.package_amount2 = package_amount2;
	}

	public String getPackage_amount3() {
		return package_amount3;
	}

	public void setPackage_amount3(String package_amount3) {
		this.package_amount3 = package_amount3;
	}

	public Integer getVendor_id() {
		return vendor_id;
	}

	public void setVendor_id(Integer vendor_id) {
		this.vendor_id = vendor_id;
	}

	public String getVendor_name() {
		return vendor_name;
	}

	public void setVendor_name(String vendor_name) {
		this.vendor_name = vendor_name;
	}

	public String getVendor_number() {
		return vendor_number;
	}

	public void setVendor_number(String vendor_number) {
		this.vendor_number = vendor_number;
	}

	public String getVendor_type() {
		return vendor_type;
	}

	public void setVendor_type(String vendor_type) {
		this.vendor_type = vendor_type;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public Integer getReq_id() {
		return req_id;
	}

	public void setReq_id(Integer req_id) {
		this.req_id = req_id;
	}

	public Boolean getFlag() {
		return flag;
	}

	public void setFlag(Boolean flag) {
		this.flag = flag;
	}

	@Override
	public String toString() {
		return "Response [id=" + id + ", package_id1=" + package_id1 + ", package_id2=" + package_id2 + ", package_id3="
				+ package_id3 + ", package_name1=" + package_name1 + ", package_name2=" + package_name2
				+ ", package_name3=" + package_name3 + ", package_amount1=" + package_amount1 + ", package_amount2="
				+ package_amount2 + ", package_amount3=" + package_amount3 + ", vendor_id=" + vendor_id
				+ ", vendor_name=" + vendor_name + ", vendor_number=" + vendor_number + ", vendor_type=" + vendor_type
				+ ", user_id=" + user_id + ", req_id=" + req_id + ", flag=" + flag + "]";
	}
}
