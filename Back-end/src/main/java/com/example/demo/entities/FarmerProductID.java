package com.example.demo.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public class FarmerProductID implements Serializable {

	private int fid;
	private int pid;
	
	public FarmerProductID() {
		super();
	}
	
	public FarmerProductID(int fid, int pid) {
		super();
		this.fid = fid;
		this.pid = pid;
	}
	
	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	@Override
	public int hashCode() {
		return Objects.hash(fid, pid);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FarmerProductID other = (FarmerProductID) obj;
		return fid == other.fid && pid == other.pid;
	}
		
}
