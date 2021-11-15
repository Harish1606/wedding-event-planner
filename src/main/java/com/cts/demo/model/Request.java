package com.cts.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="request")
public class Request {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String first_name;
	private String last_name;
	private Date from_date;
	private Date to_date;
	private String location_;
	private String service_;
	private String budget;
	private String mobile_no;
	private String status_;
	private String time_;
	private Integer user_id;
	private Boolean flag;
	
	public Request() {
		
	}

	public Request(Integer id, String first_name, String last_name, Date from_date, Date to_date, String location_,
			String service_, String budget, String mobile_no, String status_, String time_, Integer user_id,
			Boolean flag) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.from_date = from_date;
		this.to_date = to_date;
		this.location_ = location_;
		this.service_ = service_;
		this.budget = budget;
		this.mobile_no = mobile_no;
		this.status_ = status_;
		this.time_ = time_;
		this.user_id = user_id;
		this.flag = flag;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Date getFrom_date() {
		return from_date;
	}

	public void setFrom_date(Date from_date) {
		this.from_date = from_date;
	}

	public Date getTo_date() {
		return to_date;
	}

	public void setTo_date(Date to_date) {
		this.to_date = to_date;
	}

	public String getLocation_() {
		return location_;
	}

	public void setLocation_(String location_) {
		this.location_ = location_;
	}

	public String getService_() {
		return service_;
	}

	public void setService_(String service_) {
		this.service_ = service_;
	}

	public String getBudget() {
		return budget;
	}

	public void setBudget(String budget) {
		this.budget = budget;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getStatus_() {
		return status_;
	}

	public void setStatus_(String status_) {
		this.status_ = status_;
	}

	public String getTime_() {
		return time_;
	}

	public void setTime_(String time_) {
		this.time_ = time_;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public Boolean getFlag() {
		return flag;
	}

	public void setFlag(Boolean flag) {
		this.flag = flag;
	}

	@Override
	public String toString() {
		return "Request [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", from_date="
				+ from_date + ", to_date=" + to_date + ", location_=" + location_ + ", service_=" + service_
				+ ", budget=" + budget + ", mobile_no=" + mobile_no + ", status_=" + status_ + ", time_=" + time_
				+ ", user_id=" + user_id + ", flag=" + flag + "]";
	}
}
