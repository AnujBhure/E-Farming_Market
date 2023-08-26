//package com.example.demo.entities;
//
//import javax.persistence.EmbeddedId;
//import javax.persistence.Entity;
//import javax.persistence.IdClass;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.MapsId;
//import javax.persistence.Table;
//
//@Entity
//@Table(name="farmers_products")
//@IdClass(FarmerProductID.class)
//public class Farmer_Product{
//
//	private float price;
//	private String description;
//	
//	@EmbeddedId
//	private FarmerProductID fp_id;
//	
//	@ManyToOne
//	@MapsId("fid")
//	@JoinColumn(name = "fid")
//	private Farmer farmer;
//	
//	@ManyToOne
//	@MapsId("pid")
//	@JoinColumn(name = "pid")
//	private Product product;
//
//	public Farmer_Product() {
//		super();
//	}
//	
//	public Farmer_Product(float price, String description, FarmerProductID fp_id, Farmer farmer, Product product) {
//		super();
//		this.price = price;
//		this.description = description;
//		this.fp_id = fp_id;
//		this.farmer = farmer;
//		this.product = product;
//	}
//
//	public float getPrice() {
//		return price;
//	}
//
//	public void setPrice(float price) {
//		this.price = price;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public FarmerProductID getFp_id() {
//		return fp_id;
//	}
//
//	public void setFp_id(FarmerProductID fp_id) {
//		this.fp_id = fp_id;
//	}
//
//	public Farmer getFarmer() {
//		return farmer;
//	}
//
//	public void setFarmer(Farmer farmer) {
//		this.farmer = farmer;
//	}
//
//	public Product getProduct() {
//		return product;
//	}
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}
//	
//}
