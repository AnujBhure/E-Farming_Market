package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AddProduct;
import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepo;

@Service
public class ProductService {

	@Autowired
	ProductRepo prepo;
	
	public List<Product> getProducts()
	{
		return prepo.findAll();
	}
	
	public List<Product> getProductsByCat(int cid)
	{
		return prepo.getProductsByCat(cid);
	}
	
	public Product addProduct(Product p)
	{
		
		return prepo.save(p);
	}
	
}
