package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="farmers_products")
public class Farmer_Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fp_id;
	private float price;
	private String description;
	
	@JsonIgnoreProperties("farmers_products")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fid", nullable = false)
	private Farmer farmer;
	
	@JsonIgnoreProperties("farmers_products")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pid", nullable = false)
	private Product product;
	
	@JsonIgnoreProperties("farmers_products")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cid", nullable = false)
	private Category category;

	public Farmer_Product() {
		super();
	}

	public Farmer_Product(float price, String description, Farmer farmer, Product product, Category category) {
		super();
		this.price = price;
		this.description = description;
		this.farmer = farmer;
		this.product = product;
		this.category = category;
	}

	public int getFp_id() {
		return fp_id;
	}

	public void setFp_id(int fp_id) {
		this.fp_id = fp_id;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}	
	
}
